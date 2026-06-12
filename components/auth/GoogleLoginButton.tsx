"use client";

import { createClient } from "@/lib/supabase/client";

export function GoogleLoginButton() {
  const handleLogin = async () => {
    const supabase = createClient();

    const siteUrl =
      process.env.NEXT_PUBLIC_SITE_URL || window.location.origin;

    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${siteUrl}/auth/callback?next=/polla-mundial/dashboard`,
      },
    });
  };

  return (
    <button
      type="button"
      onClick={handleLogin}
      className="w-full rounded-full bg-blue-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-blue-950/30 transition hover:bg-blue-500"
    >
      Continuar con Google
    </button>
  );
}