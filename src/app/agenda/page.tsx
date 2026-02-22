import { Timeline } from "@/components/agenda/timeLine";

export default function AgendaPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="pt-32 pb-12 px-6">
        <div className="container mx-auto text-center max-w-2xl">
          <span className="text-primary font-bold tracking-wider uppercase text-sm">
            Ciclo 2026
          </span>
          <h1 className="text-4xl md:text-6xl font-black mt-4 mb-6 text-white">
            Agenda{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-blue-900">
              MFCJ
            </span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            No te pierdas nada. Aquí tienes todos nuestros retiros, servicios y
            eventos de integración planeados para este año.
          </p>
        </div>
      </section>

      <section className="px-4 pb-24">
        <Timeline />
      </section>
    </main>
  );
}
