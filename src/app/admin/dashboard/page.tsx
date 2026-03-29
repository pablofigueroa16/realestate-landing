"use client";

import { useRouter } from "next/navigation";

export default function AdminDashboardPage() {
  const router = useRouter();

  async function handleLogout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin");
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f5f0e8] to-[#e8e4dc]">
      <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
        <div>
          <h1 className="text-lg font-bold text-gray-900">Panel Admin</h1>
          <p className="text-xs text-gray-500">Estetico Estate</p>
        </div>
        <button
          onClick={handleLogout}
          className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
        >
          Cerrar sesión
        </button>
      </header>

      <main className="p-8">
        <h2 className="text-xl font-semibold text-gray-700">
          Gestión de Propiedades
        </h2>
        <p className="text-sm text-gray-400 mt-1">
          Próximamente podrás modificar las propiedades desde aquí.
        </p>
      </main>
    </div>
  );
}
