"use client";

import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";

export function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    const supabase = createClient();

    await supabase.auth.signOut();

    router.push("/polla-mundial");
    router.refresh();
  };

  return (
    <button
      type="button"
      onClick={handleLogout}
      className="rounded-full border border-blue-400/30 px-4 py-2 text-sm font-bold text-white transition hover:border-cyan-300 hover:bg-blue-600/20"
    >
      Salir
    </button>
  );
}