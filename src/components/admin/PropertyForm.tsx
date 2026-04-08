"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { Plus, Trash2, Upload, X } from "lucide-react";
import { NearbyPlace } from "@/data/properties";
import { PropertyDraft } from "@/lib/property-draft";

export type { PropertyDraft };
export { emptyProperty } from "@/lib/property-draft";

// ────────────────────────────────────────────────
// Helpers
// ────────────────────────────────────────────────
function slugify(text: string) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

const CITIES = [
  { value: "dubai", label: "Dubai" },
  { value: "bali", label: "Bali" },
  { value: "miami", label: "Miami" },
  { value: "madrid", label: "Madrid" },
  { value: "cdmx", label: "CDMX" },
];

// ────────────────────────────────────────────────
// Sub-components
// ────────────────────────────────────────────────
function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-6">
      <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-5">{title}</h3>
      <div className="space-y-4">{children}</div>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-xs font-semibold text-gray-600 mb-1">{label}</label>
      {children}
    </div>
  );
}

function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300 text-gray-900 bg-white placeholder:text-gray-400"
    />
  );
}

function Textarea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      {...props}
      rows={3}
      className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300 text-gray-900 bg-white placeholder:text-gray-400 resize-y"
    />
  );
}

function AddButton({ onClick, label }: { onClick: () => void; label: string }) {
  return (
    <button type="button" onClick={onClick} className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-gray-900 transition-colors mt-2">
      <Plus size={13} /> {label}
    </button>
  );
}

function RemoveButton({ onClick }: { onClick: () => void }) {
  return (
    <button type="button" onClick={onClick} className="p-1 text-gray-300 hover:text-red-500 transition-colors shrink-0">
      <Trash2 size={14} />
    </button>
  );
}

// ────────────────────────────────────────────────
// Main Form
// ────────────────────────────────────────────────
interface Props {
  initial: PropertyDraft;
  initialCity?: string;
  mode: "create" | "edit";
  originalSlug?: string;
}

export default function PropertyForm({ initial, initialCity = "dubai", mode, originalSlug }: Props) {
  const router = useRouter();
  const [city, setCity] = useState(initialCity);
  const [p, setP] = useState<PropertyDraft>(initial);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [uploading, setUploading] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  // ── Setters ──────────────────────────────────
  function set<K extends keyof PropertyDraft>(key: K, value: PropertyDraft[K]) {
    setP((prev) => ({ ...prev, [key]: value }));
  }

  function setNested<K extends keyof PropertyDraft>(key: K, subKey: string, value: unknown) {
    setP((prev) => ({ ...prev, [key]: { ...(prev[key] as object), [subKey]: value } }));
  }

  // ── Image upload ─────────────────────────────
  async function handleImageUpload(files: FileList) {
    setUploading(true);
    const uploaded: string[] = [];
    for (const file of Array.from(files)) {
      const res = await fetch("/api/admin/upload", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ filename: file.name, contentType: file.type }),
      });
      const { url, publicUrl } = await res.json();
      await fetch(url, { method: "PUT", body: file, headers: { "Content-Type": file.type } });
      uploaded.push(publicUrl);
    }
    set("images", [...p.images, ...uploaded]);
    setUploading(false);
  }

  // ── Save ─────────────────────────────────────
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setSaving(true);
    try {
      const payload = { city, ...p };
      let res: Response;
      if (mode === "create") {
        res = await fetch("/api/properties", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
      } else {
        res = await fetch(`/api/properties/${originalSlug}`, { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
      }
      if (!res.ok) throw new Error("Error al guardar");
      router.push("/admin/dashboard");
    } catch {
      setError("Error al guardar la propiedad.");
    } finally {
      setSaving(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* BÁSICO */}
      <Section title="Básico">
        <div className="grid grid-cols-2 gap-4">
          <Field label="País">
            <select
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300 text-gray-900 bg-white"
            >
              {CITIES.map((c) => <option key={c.value} value={c.value}>{c.label}</option>)}
            </select>
          </Field>
          <Field label="ID">
            <Input value={p.id} onChange={(e) => { set("id", e.target.value); }} placeholder="sobha-hartland-ii" />
          </Field>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Field label="Slug (URL)">
            <Input value={p.slug} onChange={(e) => set("slug", e.target.value)} placeholder="sobha-hartland-ii" />
          </Field>
          <Field label="Tamaño">
            <Input value={p.size} onChange={(e) => set("size", e.target.value)} placeholder="Desde 500 ft²" />
          </Field>
        </div>
        <Field label="Descripción corta (listado)">
          <Textarea value={p.description} onChange={(e) => set("description", e.target.value)} placeholder="Descripción breve para la lista de propiedades" />
        </Field>
      </Section>

      {/* IMÁGENES */}
      <Section title="Imágenes">
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
          {p.images.map((img, idx) => (
            <div key={idx} className="relative group">
              <img src={img} alt="" className="w-full h-24 object-cover rounded-lg" />
              <button
                type="button"
                onClick={() => set("images", p.images.filter((_, i) => i !== idx))}
                className="absolute top-1 right-1 bg-black/60 text-white rounded-full p-0.5 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <X size={12} />
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() => fileRef.current?.click()}
            disabled={uploading}
            className="h-24 border-2 border-dashed border-gray-200 rounded-lg flex flex-col items-center justify-center text-gray-400 hover:border-gray-400 hover:text-gray-600 transition-colors text-xs gap-1"
          >
            <Upload size={18} />
            {uploading ? "Subiendo..." : "Subir"}
          </button>
        </div>
        <input ref={fileRef} type="file" accept="image/*" multiple className="hidden" onChange={(e) => e.target.files && handleImageUpload(e.target.files)} />
        <Field label="O pega URLs de imágenes (una por línea)">
          <Textarea
            value={p.images.join("\n")}
            onChange={(e) => set("images", e.target.value.split("\n").filter(Boolean))}
            placeholder="https://..."
            rows={3}
          />
        </Field>
      </Section>

      {/* HERO */}
      <Section title="Hero">
        <Field label="Título">
          <Input value={p.hero.title} onChange={(e) => { const t = e.target.value; setNested("hero", "title", t); if (mode === "create") { set("id", slugify(t)); set("slug", slugify(t)); } }} placeholder="Sobha Hartland II" />
        </Field>
        <Field label="Subtítulo">
          <Input value={p.hero.subtitle} onChange={(e) => setNested("hero", "subtitle", e.target.value)} placeholder="Lujo moderno en el corazón de Dubai" />
        </Field>
        <Field label="Descripción">
          <Textarea value={p.hero.description} onChange={(e) => setNested("hero", "description", e.target.value)} />
        </Field>
        <Field label="Imagen de fondo (URL)">
          <Input value={p.hero.bgImage} onChange={(e) => setNested("hero", "bgImage", e.target.value)} placeholder="https://..." />
        </Field>
        <Field label="Video de fondo (URL)">
          <Input value={p.hero.bgVideo} onChange={(e) => setNested("hero", "bgVideo", e.target.value)} placeholder="https://..." />
        </Field>
        <Field label="Badges">
          {p.hero.badges.map((b, i) => (
            <div key={i} className="flex gap-2 mb-2">
              <Input value={b} onChange={(e) => { const arr = [...p.hero.badges]; arr[i] = e.target.value; setNested("hero", "badges", arr); }} placeholder="LUXURY" />
              <RemoveButton onClick={() => { const arr = p.hero.badges.filter((_, j) => j !== i); setNested("hero", "badges", arr); }} />
            </div>
          ))}
          <AddButton onClick={() => setNested("hero", "badges", [...p.hero.badges, ""])} label="Agregar badge" />
        </Field>
      </Section>

      {/* TEXTOS PRINCIPALES */}
      {(["summary", "concept", "community", "privacy", "views", "design", "project"] as const).map((key) => (
        <Section key={key} title={key.charAt(0).toUpperCase() + key.slice(1)}>
          <Field label="Título">
            <Input value={(p[key] as { title: string }).title} onChange={(e) => setNested(key, "title", e.target.value)} />
          </Field>
          <Field label="Texto">
            <Textarea value={(p[key] as { text: string }).text} onChange={(e) => setNested(key, "text", e.target.value)} />
          </Field>
        </Section>
      ))}

      {/* UBICACIÓN */}
      <Section title="Ubicación">
        <div className="grid grid-cols-2 gap-4">
          <Field label="Título">
            <Input value={p.location.title} onChange={(e) => setNested("location", "title", e.target.value)} />
          </Field>
          <Field label="Intro">
            <Input value={p.location.intro} onChange={(e) => setNested("location", "intro", e.target.value)} />
          </Field>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Field label="Latitud">
            <Input type="number" step="any" value={p.location.latitude ?? ""} onChange={(e) => setNested("location", "latitude", e.target.value ? parseFloat(e.target.value) : undefined)} />
          </Field>
          <Field label="Longitud">
            <Input type="number" step="any" value={p.location.longitude ?? ""} onChange={(e) => setNested("location", "longitude", e.target.value ? parseFloat(e.target.value) : undefined)} />
          </Field>
        </div>
        <Field label="Lugares cercanos (nombre o JSON con lat/lng)">
          {(p.location.nearby as string[]).map((n, i) => (
            <div key={i} className="flex gap-2 mb-2">
              <Input value={typeof n === "string" ? n : JSON.stringify(n)} onChange={(e) => { const arr = [...p.location.nearby] as string[]; arr[i] = e.target.value; setNested("location", "nearby", arr); }} placeholder="Dubai Mall - 5 min" />
              <RemoveButton onClick={() => { const arr = (p.location.nearby as string[]).filter((_, j) => j !== i); setNested("location", "nearby", arr); }} />
            </div>
          ))}
          <AddButton onClick={() => setNested("location", "nearby", [...(p.location.nearby as string[]), ""])} label="Agregar lugar" />
        </Field>
      </Section>

      {/* SUB-COMUNIDADES */}
      <Section title="Sub-comunidades">
        {p.subCommunities.map((sc, i) => (
          <div key={i} className="border border-gray-100 rounded-xl p-4 space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-xs font-semibold text-gray-400">Sub-comunidad {i + 1}</span>
              <RemoveButton onClick={() => set("subCommunities", p.subCommunities.filter((_, j) => j !== i))} />
            </div>
            <Field label="Título">
              <Input value={sc.title} onChange={(e) => { const arr = [...p.subCommunities]; arr[i] = { ...arr[i], title: e.target.value }; set("subCommunities", arr); }} />
            </Field>
            <Field label="Texto">
              <Textarea value={sc.text} onChange={(e) => { const arr = [...p.subCommunities]; arr[i] = { ...arr[i], text: e.target.value }; set("subCommunities", arr); }} />
            </Field>
          </div>
        ))}
        <AddButton onClick={() => set("subCommunities", [...p.subCommunities, { title: "", text: "" }])} label="Agregar sub-comunidad" />
      </Section>

      {/* AMENIDADES */}
      <Section title="Amenidades">
        <Field label="Título">
          <Input value={p.amenities.title} onChange={(e) => setNested("amenities", "title", e.target.value)} />
        </Field>
        <Field label="Intro">
          <Textarea value={p.amenities.intro} onChange={(e) => setNested("amenities", "intro", e.target.value)} />
        </Field>
        {p.amenities.categories.map((cat, ci) => (
          <div key={ci} className="border border-gray-100 rounded-xl p-4 space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-xs font-semibold text-gray-400">Categoría {ci + 1}</span>
              <RemoveButton onClick={() => { const arr = p.amenities.categories.filter((_, j) => j !== ci); setNested("amenities", "categories", arr); }} />
            </div>
            <Field label="Nombre categoría">
              <Input value={cat.name} onChange={(e) => { const arr = [...p.amenities.categories]; arr[ci] = { ...arr[ci], name: e.target.value }; setNested("amenities", "categories", arr); }} />
            </Field>
            <Field label="Items">
              {cat.items.map((item, ii) => (
                <div key={ii} className="flex gap-2 mb-2">
                  <Input value={item} onChange={(e) => { const cats = [...p.amenities.categories]; cats[ci].items[ii] = e.target.value; setNested("amenities", "categories", cats); }} placeholder="Piscina infinita" />
                  <RemoveButton onClick={() => { const cats = [...p.amenities.categories]; cats[ci].items = cats[ci].items.filter((_, j) => j !== ii); setNested("amenities", "categories", cats); }} />
                </div>
              ))}
              <AddButton onClick={() => { const cats = [...p.amenities.categories]; cats[ci].items = [...cats[ci].items, ""]; setNested("amenities", "categories", cats); }} label="Agregar item" />
            </Field>
          </div>
        ))}
        <AddButton onClick={() => setNested("amenities", "categories", [...p.amenities.categories, { name: "", items: [""] }])} label="Agregar categoría" />
      </Section>

      {/* DESARROLLADOR */}
      <Section title="Desarrollador">
        <Field label="Título">
          <Input value={p.developer.title} onChange={(e) => setNested("developer", "title", e.target.value)} />
        </Field>
        <Field label="Intro">
          <Textarea value={p.developer.intro} onChange={(e) => setNested("developer", "intro", e.target.value)} />
        </Field>
        <Field label="Puntos clave">
          {p.developer.bullets.map((b, i) => (
            <div key={i} className="flex gap-2 mb-2">
              <Input value={b} onChange={(e) => { const arr = [...p.developer.bullets]; arr[i] = e.target.value; setNested("developer", "bullets", arr); }} placeholder="20 años de experiencia" />
              <RemoveButton onClick={() => setNested("developer", "bullets", p.developer.bullets.filter((_, j) => j !== i))} />
            </div>
          ))}
          <AddButton onClick={() => setNested("developer", "bullets", [...p.developer.bullets, ""])} label="Agregar punto" />
        </Field>
      </Section>

      {/* FAQ */}
      <Section title="FAQ">
        {p.faq.map((f, i) => (
          <div key={i} className="border border-gray-100 rounded-xl p-4 space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-xs font-semibold text-gray-400">Pregunta {i + 1}</span>
              <RemoveButton onClick={() => set("faq", p.faq.filter((_, j) => j !== i))} />
            </div>
            <Field label="Pregunta">
              <Input value={f.question} onChange={(e) => { const arr = [...p.faq]; arr[i] = { ...arr[i], question: e.target.value }; set("faq", arr); }} />
            </Field>
            <Field label="Respuesta">
              <Textarea value={f.answer} onChange={(e) => { const arr = [...p.faq]; arr[i] = { ...arr[i], answer: e.target.value }; set("faq", arr); }} />
            </Field>
          </div>
        ))}
        <AddButton onClick={() => set("faq", [...p.faq, { question: "", answer: "" }])} label="Agregar pregunta" />
      </Section>

      {/* DISCLAIMERS */}
      <Section title="Disclaimers">
        <Field label="Renders">
          <Textarea value={p.disclaimers.renders} onChange={(e) => setNested("disclaimers", "renders", e.target.value)} />
        </Field>
        <Field label="Disponibilidad">
          <Textarea value={p.disclaimers.availability} onChange={(e) => setNested("disclaimers", "availability", e.target.value)} />
        </Field>
      </Section>

      {error && <p className="text-sm text-red-500 text-center">{error}</p>}

      <div className="flex gap-4 pb-10">
        <button type="button" onClick={() => router.push("/admin/dashboard")} className="px-6 py-2.5 rounded-lg border border-gray-200 text-sm text-gray-600 hover:bg-gray-50 transition-colors">
          Cancelar
        </button>
        <button type="submit" disabled={saving} className="px-6 py-2.5 rounded-lg bg-gray-900 text-white text-sm font-medium hover:bg-gray-700 transition-colors disabled:opacity-50">
          {saving ? "Guardando..." : mode === "create" ? "Crear propiedad" : "Guardar cambios"}
        </button>
      </div>
    </form>
  );
}
