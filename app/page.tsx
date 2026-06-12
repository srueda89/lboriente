import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/lboriente/",
    icon: FaInstagram,
  },
  {
    name: "X",
    href: "https://x.com/LBOriente",
    icon: FaXTwitter,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/LaBandaDeOriente",
    icon: FaFacebookF,
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@lboriente",
    icon: FaTiktok,
  },
];

export default function HomePage() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-6 text-white">
      <section className="relative z-10 flex flex-col items-center gap-8 text-center">
        <Image
          src="/logo-lboriente.png"
          alt="La Banda de Oriente"
          width={420}
          height={420}
          priority
          className="h-auto w-72 sm:w-96"
        />

        <nav aria-label="Redes sociales">
          <ul className="flex items-center gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;

              return (
                <li key={social.name}>
                  <Link
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-blue-400/35 bg-blue-950/40 text-white shadow-lg shadow-blue-950/30 transition hover:border-cyan-300 hover:bg-blue-700/40 hover:text-cyan-100"
                  >
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </section>
    </main>
  );
}