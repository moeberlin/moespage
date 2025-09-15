import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-gray-200 dark:from-gray-900 dark:to-gray-800 font-sans">
      {/* HERO */}
      <header className="flex flex-col items-center justify-center text-center py-20 px-6 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">
          Willkommen bei Kaufmann Moe
        </h1>
        <p className="mt-4 text-lg sm:text-xl max-w-2xl">
          Ihr Partner für moderne Handelslösungen, Qualität und Vertrauen.
        </p>
        <div className="mt-8 flex gap-4 flex-wrap justify-center">
          <a
            href="#leistungen"
            className="px-6 py-3 rounded-full bg-white text-blue-800 font-semibold hover:bg-gray-200 shadow-md transition"
          >
            Unsere Leistungen
          </a>
          <a
            href="#kontakt"
            className="px-6 py-3 rounded-full border border-white font-semibold hover:bg-white hover:text-blue-800 transition"
          >
            Kontakt aufnehmen
          </a>
        </div>
      </header>

      {/* LEISTUNGEN */}
      <main className="flex-1 px-6 sm:px-12 py-16" id="leistungen">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          Unsere Leistungen
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="p-6 bg-white dark:bg-gray-700 rounded-xl shadow-md hover:shadow-xl transition">
            <Image
              src="/file.svg"
              alt="Beratung"
              width={40}
              height={40}
              className="mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Beratung</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Professionelle Beratung für Unternehmen und Partner im Handel.
            </p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-700 rounded-xl shadow-md hover:shadow-xl transition">
            <Image
              src="/globe.svg"
              alt="Handel"
              width={40}
              height={40}
              className="mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Internationaler Handel</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Globale Handelsbeziehungen und Logistiklösungen für Ihr Geschäft.
            </p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-700 rounded-xl shadow-md hover:shadow-xl transition">
            <Image
              src="/window.svg"
              alt="Digitalisierung"
              width={40}
              height={40}
              className="mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Digitalisierung</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Moderne digitale Tools für effiziente Geschäftsprozesse.
            </p>
          </div>
        </div>
      </main>

      {/* KONTAKT */}
      <section
        id="kontakt"
        className="bg-blue-700 text-white py-16 px-6 text-center"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
          Lassen Sie uns zusammenarbeiten
        </h2>
        <p className="max-w-2xl mx-auto mb-8 text-lg">
          Kontaktieren Sie mich für individuelle Angebote und Lösungen.
        </p>
        <a
          href="mailto:info@kaufmann-moe.de"
          className="px-8 py-4 rounded-full bg-white text-blue-800 font-semibold hover:bg-gray-200 transition shadow-lg"
        >
          E-Mail senden
        </a>
      </section>

      {/* FOOTER */}
      <footer className="py-8 text-center text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
        <p>© {new Date().getFullYear()} Kaufmann Moe. Alle Rechte vorbehalten.</p>
      </footer>
    </div>
  );
}
