"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Plus, Pencil, Trash2, LogOut, Building2, AlertTriangle } from "lucide-react";

interface PropertyItem {
  slug: string;
  city: string;
  citySlug: string;
  hero: { title: string };
  images?: string[];
  description?: string;
}

const cityLabels: Record<string, string> = {
  dubai: "Dubai",
  bali: "Bali",
  miami: "Miami",
  madrid: "Madrid",
  cdmx: "CDMX",
};

const cityColors: Record<string, string> = {
  dubai: "bg-amber-100 text-amber-700",
  bali: "bg-emerald-100 text-emerald-700",
  miami: "bg-sky-100 text-sky-700",
  madrid: "bg-red-100 text-red-700",
  cdmx: "bg-purple-100 text-purple-700",
};

interface ConfirmState {
  slug: string;
  city: string;
  title: string;
}

export default function AdminDashboardPage() {
  const router = useRouter();
  const [properties, setProperties] = useState<PropertyItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState<string | null>(null);
  const [confirm, setConfirm] = useState<ConfirmState | null>(null);

  async function loadProperties() {
    setLoading(true);
    const res = await fetch("/api/properties");
    const data = await res.json();
    setProperties(data);
    setLoading(false);
  }

  useEffect(() => { loadProperties(); }, []);

  async function handleLogout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin");
  }

  async function handleDelete(city: string, slug: string, title: string) {
    setConfirm({ city, slug, title });
  }

  async function confirmDelete() {
    if (!confirm) return;
    setDeleting(confirm.slug);
    setConfirm(null);
    await fetch(`/api/properties/${confirm.slug}?city=${confirm.city}`, { method: "DELETE" });
    await loadProperties();
    setDeleting(null);
  }

  const grouped = properties.reduce<Record<string, PropertyItem[]>>((acc, p) => {
    const key = p.citySlug ?? p.city ?? "sin-ciudad";
    if (!acc[key]) acc[key] = [];
    acc[key].push(p);
    return acc;
  }, {});

  return (
    <div className="min-h-screen bg-gray-50">
      {confirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-sm mx-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center shrink-0">
                <AlertTriangle size={18} className="text-red-500" />
              </div>
              <div>
                <p className="font-semibold text-gray-900 text-sm">Eliminar propiedad</p>
                <p className="text-xs text-gray-400">Esta acción no se puede deshacer</p>
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-6">
              ¿Estás seguro de que quieres eliminar{" "}
              <span className="font-medium text-gray-900">{confirm.title}</span>?
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setConfirm(null)}
                className="flex-1 px-4 py-2 rounded-lg border border-gray-200 text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors"
              >
                Cancelar
              </button>
              <button
                onClick={confirmDelete}
                className="flex-1 px-4 py-2 rounded-lg bg-red-600 text-white text-sm font-medium hover:bg-red-700 transition-colors"
              >
                Eliminar
              </button>
            </div>
          </div>
        </div>
      )}
      <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between sticky top-0 z-10">
        <div className="flex items-center gap-3">
          <Building2 size={20} className="text-gray-700" />
          <div>
            <p className="text-sm font-bold text-gray-900">Panel Admin</p>
            <p className="text-xs text-gray-400">Beliving Property</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Link
            href="/admin/dashboard/propiedades/nueva"
            className="flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-700 transition-colors"
          >
            <Plus size={16} />
            Nueva propiedad
          </Link>
          <button onClick={handleLogout} className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 transition-colors">
            <LogOut size={16} />
            Salir
          </button>
        </div>
      </header>

      <main className="p-8 max-w-5xl mx-auto">
        <h1 className="text-xl font-semibold text-gray-800 mb-6">Propiedades</h1>

        {loading ? (
          <div className="space-y-3">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-16 bg-gray-200 rounded-xl animate-pulse" />
            ))}
          </div>
        ) : properties.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl border border-gray-100">
            <Building2 size={40} className="text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500 mb-4">No hay propiedades en la base de datos</p>
            <Link href="/admin/dashboard/propiedades/nueva" className="inline-flex items-center gap-2 bg-gray-900 text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-700 transition-colors">
              <Plus size={16} />
              Agregar primera propiedad
            </Link>
          </div>
        ) : (
          <div className="space-y-8">
            {Object.entries(grouped).map(([city, items]) => (
              <div key={city}>
                <h2 className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-3">
                  {cityLabels[city] ?? city}
                </h2>
                <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
                  {items.map((p, idx) => (
                    <div key={p.slug} className={`flex items-center gap-4 px-5 py-4 ${idx < items.length - 1 ? "border-b border-gray-50" : ""}`}>
                      {p.images?.[0] ? (
                        <img src={p.images[0]} alt={p.hero.title} className="w-12 h-12 rounded-lg object-cover shrink-0" />
                      ) : (
                        <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center shrink-0">
                          <Building2 size={20} className="text-gray-400" />
                        </div>
                      )}
                      <div className="grow min-w-0">
                        <p className="font-medium text-gray-900 truncate">{p.hero.title}</p>
                        <p className="text-xs text-gray-400 truncate">{p.slug}</p>
                      </div>
                      <span className={`text-xs font-medium px-2.5 py-1 rounded-full shrink-0 ${cityColors[city] ?? "bg-gray-100 text-gray-600"}`}>
                        {cityLabels[city] ?? city}
                      </span>
                      <div className="flex items-center gap-2 shrink-0">
                        <Link
                          href={`/admin/dashboard/propiedades/${p.slug}/editar?city=${p.citySlug ?? city}`}
                          className="p-2 text-gray-400 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
                        >
                          <Pencil size={15} />
                        </Link>
                        <button
                          onClick={() => handleDelete(p.citySlug ?? city, p.slug, p.hero.title)}
                          disabled={deleting === p.slug}
                          className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors disabled:opacity-40"
                        >
                          <Trash2 size={15} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
