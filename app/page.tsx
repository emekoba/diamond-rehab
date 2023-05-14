import Header from "@/components/Header";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header />

      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        sderfgsd
        <Image
          src="/assets/bg1.jpg"
          alt="Vercel Logo"
          className="dark:invert"
          width={100}
          height={24}
          priority
        />
      </div>
    </main>
  );
}
