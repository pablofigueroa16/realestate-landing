import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import PropertyForm from "@/components/admin/PropertyForm";
import { emptyProperty } from "@/lib/property-draft";

export default function NuevaPropiedad() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center gap-4 sticky top-0 z-10">
        <Link href="/admin/dashboard" className="p-2 text-gray-400 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
          <ArrowLeft size={18} />
        </Link>
        <div>
          <p className="text-sm font-bold text-gray-900">Nueva propiedad</p>
          <p className="text-xs text-gray-400">Completa todos los campos y guarda</p>
        </div>
      </header>
      <main className="p-8 max-w-3xl mx-auto">
        <PropertyForm initial={emptyProperty()} mode="create" />
      </main>
    </div>
  );
}
