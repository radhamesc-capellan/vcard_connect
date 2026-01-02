"use client";

import { authService } from "@/services/authService";
import { Button } from "@/components/ui/Button";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const user = authService.getUser();
  const router = useRouter();

  const handleLogout = () => {
    authService.logout();
    router.push("/");
  };

  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg shadow-xl p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Panel de Control (Privado)
        </h1>
        <Button variant="outline" size="sm" onClick={handleLogout}>
          Cerrar Sesión
        </Button>
      </div>

      <div className="prose dark:prose-invert max-w-none">
        <div className="bg-green-50 dark:bg-green-900/30 border-l-4 border-green-500 p-4 mb-6">
          <p className="font-bold text-green-700 dark:text-green-300">
            🔒 ACCESO AUTORIZADO
          </p>
          <p className="text-sm text-green-600 dark:text-green-400">
            Estás viendo este contenido porque <strong>AuthGuard</strong>{" "}
            detectó un token en tu navegador.
          </p>
        </div>

        <p>
          Bienvenido, <strong>{user?.name}</strong> ({user?.email}).
        </p>

        <p>
          Esta página demuestra la protección de rutas en el Frontend. Si
          intentas acceder a esta URL en modo incógnito (sin token), serás
          redirigido automáticamente.
        </p>
      </div>
    </div>
  );
}
