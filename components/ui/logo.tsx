import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="text-2xl font-bold tracking-tighter">
      Port<span className="text-emerald-500">ify</span>
    </Link>
  );
}
