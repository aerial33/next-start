import EditorialSection from "@/sections/Editorial";
import Hero from "@/sections/Hero";

export default function Home() {
  return (
    <main className="mx-auto mt-16 flex max-w-7xl flex-col px-6 lg:px-0">
      <Hero />
      <EditorialSection />
    </main>
  );
}
