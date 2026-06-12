"use client";

import Link from "next/link";
import { useState } from "react";
import { createClient } from "@/lib/supabase/client";

export function GoogleLoginButton() {
  const [accepted, setAccepted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!accepted || loading) return;

    setLoading(true);

    const supabase = createClient();

    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || window.location.origin;

    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${siteUrl}/auth/callback?next=/polla-mundial/dashboard`,
      },
    });

    setLoading(false);
  };

  return (
    <div className="space-y-4">
      <label className="flex items-start gap-3 rounded-2xl border border-blue-300/15 bg-blue-950/25 p-4 text-left text-xs leading-5 text-blue-50/70">
        <input
          type="checkbox"
          checked={accepted}
          onChange={(event) => setAccepted(event.target.checked)}
          className="mt-1 h-4 w-4 rounded border-blue-300/40 bg-blue-950"
        />

        <span>
          Autorizo el tratamiento de mis datos personales para participar en la
          Polla Mundial LBOriente. Acepto que se utilicen mi nombre, correo,
          perfil de autenticación, predicciones y puntaje para gestionar la
          dinámica y el ranking.{" "}
          <Link
            href="/polla-mundial/tratamiento-datos"
            className="font-semibold text-cyan-300 underline-offset-4 hover:underline"
          >
            Ver autorización
          </Link>
          .
        </span>
      </label>

      <button
        type="button"
        onClick={handleLogin}
        disabled={!accepted || loading}
        className="w-full rounded-full bg-blue-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-blue-950/30 transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:bg-blue-900 disabled:text-white/40"
      >
        {loading ? "Conectando..." : "Continuar con Google"}
      </button>
    </div>
  );
}