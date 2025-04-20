import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 relative w-fit">
      <div className="absolute -inset-1 rounded-full bg-green-500 blur-md opacity-50"></div>
      <div className="relative flex items-center gap-2">
        <div className="h-10 w-10 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
          <span className="font-bold text-xl text-white">R</span>
        </div>
        <span className="text-xl font-bold text-white">Slash</span>
      </div>
    </Link>
  );
}
