import Link from "next/link";
import Image from "next/image";
import { SITE_NAME } from "@/lib/site";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex items-center gap-3" aria-label={SITE_NAME}>
      <Image
        src="/images/logo.png"
        width={42}
        height={42}
        alt={SITE_NAME}
        className="block"
      />
      <span className="hidden font-semibold text-gray-800 sm:inline">{SITE_NAME}</span>
    </Link>
  );
}
