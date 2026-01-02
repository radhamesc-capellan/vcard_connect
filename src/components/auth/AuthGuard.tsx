"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { authService } from "@/services/authService";

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    const checkAuth = () => {
      const isAuth = authService.isAuthenticated();
      if (!isAuth) {
        // Redirigir al login (en este caso al home con un parametro de error)
        console.log(
          "⛔ ACCESO DENEGADO (Frontend): No tienes token. Redirigiendo..."
        );
        router.push("/?error=unauthorized");
      } else {
        console.log("✅ ACCESO PERMITIDO (Frontend): Tienes token.");
        setAuthorized(true);
      }
    };

    checkAuth();
  }, [router]);

  // Evitamos el "parpadeo" mostrando nada hasta verificar
  if (!authorized) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  return <>{children}</>;
}
