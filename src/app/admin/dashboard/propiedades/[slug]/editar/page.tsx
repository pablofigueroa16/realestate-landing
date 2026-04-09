import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { getPropertyBySlug } from "@/lib/properties-db";
import PropertyForm from "@/components/admin/PropertyForm";
import { emptyProperty, PropertyDraft } from "@/lib/property-draft";

export default async function EditarPropiedad({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ city?: string }>;
}) {
  const { slug } = await params;
  const { city } = await searchParams;

  const dbProp = await getPropertyBySlug(slug).catch(() => null);

  const initial: PropertyDraft = dbProp
    ? {
        id: dbProp.id ?? slug,
        slug: dbProp.slug,
        hero: { title: dbProp.hero?.title ?? "", subtitle: dbProp.hero?.subtitle ?? "", description: dbProp.hero?.description ?? "", badges: dbProp.hero?.badges ?? [""], bgImage: dbProp.hero?.bgImage ?? "", bgVideo: dbProp.hero?.bgVideo ?? "" },
        summary: { title: dbProp.summary?.title ?? "", text: dbProp.summary?.text ?? "" },
        concept: { title: dbProp.concept?.title ?? "", text: dbProp.concept?.text ?? "" },
        community: { title: dbProp.community?.title ?? "", text: dbProp.community?.text ?? "" },
        privacy: { title: dbProp.privacy?.title ?? "", text: dbProp.privacy?.text ?? "" },
        views: { title: dbProp.views?.title ?? "", text: dbProp.views?.text ?? "" },
        design: { title: dbProp.design?.title ?? "", text: dbProp.design?.text ?? "" },
        location: {
          title: dbProp.location?.title ?? "",
          intro: dbProp.location?.intro ?? "",
          nearby: dbProp.location?.nearby ?? [""],
          latitude: dbProp.location?.latitude,
          longitude: dbProp.location?.longitude,
        },
        project: { title: dbProp.project?.title ?? "", text: dbProp.project?.text ?? "" },
        subCommunities: dbProp.subCommunities?.length ? dbProp.subCommunities : [{ title: "", text: "" }],
        amenities: {
          title: dbProp.amenities?.title ?? "",
          intro: dbProp.amenities?.intro ?? "",
          categories: dbProp.amenities?.categories?.length ? dbProp.amenities.categories : [{ name: "", items: [""] }],
        },
        developer: { title: dbProp.developer?.title ?? "", intro: dbProp.developer?.intro ?? "", bullets: dbProp.developer?.bullets?.length ? dbProp.developer.bullets : [""] },
        faq: dbProp.faq?.length ? dbProp.faq : [{ question: "", answer: "" }],
        disclaimers: { renders: dbProp.disclaimers?.renders ?? "", availability: dbProp.disclaimers?.availability ?? "" },
        images: dbProp.images ?? [],
        description: dbProp.description ?? "",
        size: dbProp.size ?? "",
      }
    : { ...emptyProperty(), slug };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center gap-4 sticky top-0 z-10">
        <Link href="/admin/dashboard" className="p-2 text-gray-400 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
          <ArrowLeft size={18} />
        </Link>
        <div>
          <p className="text-sm font-bold text-gray-900">Editar propiedad</p>
          <p className="text-xs text-gray-400">{slug}</p>
        </div>
      </header>
      <main className="p-8 max-w-3xl mx-auto">
        <PropertyForm initial={initial} initialCity={city ?? dbProp?.city ?? "dubai"} mode="edit" originalSlug={slug} />
      </main>
    </div>
  );
}
