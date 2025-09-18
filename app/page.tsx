"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleHover = () => setIsHovered(true);
  const handleLeave = () => setIsHovered(false);

  const openPopup = () => setShowPopup(true);
  const closePopup = () => setShowPopup(false);

  // Scroll-Effekt
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll(".fade-in");
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight - 100) {
          section.classList.add("fade-in-visible");
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-black text-white font-sans relative">
      {/* POPUP OVERLAY */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm z-50 flex items-center justify-center px-6">
          <div className="bg-gray-900 rounded-xl p-8 max-w-lg w-full shadow-2xl transform scale-100 animate-fadeIn">
            <h3 className="text-2xl font-bold mb-4 text-white">Meine Expertise</h3>
            <p className="text-gray-300">
              Als Kaufmann für IT-Systemmanagement kombiniere ich technisches Verständnis mit
              wirtschaftlichem Know-how. Ich berate Unternehmen bei der Einführung
              digitaler Lösungen, koordiniere IT-Projekte und optimiere Arbeitsabläufe
              durch Automatisierung. Durch meine Fähigkeiten im Vertrieb verstehe ich
              die Sprache der Kunden und finde die passende Lösung für jede Herausforderung.
            </p>
            <button
              onClick={closePopup}
              className="mt-6 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-all"
            >
              Schließen
            </button>
          </div>
        </div>
      )}

      {/* HERO SECTION */}
      <header
        className="relative flex flex-col items-center justify-center text-center py-32 bg-gradient-to-b from-gray-900 to-black fade-in"
        style={{
          backgroundImage: "url('/jasonleung.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('/jasonleung.jpg')" }}
        ></div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-white transition-all duration-700 ease-in-out transform hover:scale-105 hover:text-blue-500">
            IT-Lösungen, die Ihr Unternehmen revolutionieren
          </h1>
          <p className="mt-6 text-lg sm:text-xl max-w-2xl mx-auto opacity-80">
            Als Kaufmann für IT-Systemmanagement bringe ich Ihre IT auf das nächste Level – maßgeschneiderte Lösungen für die Zukunft Ihres Unternehmens.
          </p>
          <div className="mt-10 flex gap-6 justify-center">
            <button
              onClick={openPopup}
              className={`px-8 py-4 rounded-full bg-transparent border-2 border-white text-white font-semibold transition-all duration-300 transform ${
                isHovered ? "scale-110" : "scale-100"
              }`}
              onMouseEnter={handleHover}
              onMouseLeave={handleLeave}
            >
              Meine Expertise
            </button>
            <a
              href="#kontakt"
              className={`px-8 py-4 rounded-full bg-white text-black font-semibold transition-all duration-300 transform ${
                isHovered ? "scale-110" : "scale-100"
              }`}
              onMouseEnter={handleHover}
              onMouseLeave={handleLeave}
            >
              Kontaktieren Sie mich
            </a>
          </div>
        </div>
      </header>

      {/* USP SECTION */}
      <section className="py-32 px-6 bg-gray-900 text-center fade-in">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-12">
          Warum mit mir zusammenarbeiten?
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-8 bg-gray-800 rounded-xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105">
            <h3 className="text-2xl font-semibold text-white mb-4">Erfahrung & Expertise</h3>
            <p className="text-gray-400">
              Über [X Jahre] Erfahrung in der IT- und Systemintegration. Ich kenne die Herausforderungen der Branche und biete bewährte Lösungen.
            </p>
          </div>
          <div className="p-8 bg-gray-800 rounded-xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105">
            <h3 className="text-2xl font-semibold text-white mb-4">Maßgeschneiderte Lösungen</h3>
            <p className="text-gray-400">
              Jedes Unternehmen ist einzigartig. Ich entwickle maßgeschneiderte IT-Lösungen, die perfekt zu Ihren individuellen Anforderungen passen.
            </p>
          </div>
          <div className="p-8 bg-gray-800 rounded-xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105">
            <h3 className="text-2xl font-semibold text-white mb-4">Zukunftssicherheit</h3>
            <p className="text-gray-400">
              Durch nachhaltige Technologien stelle ich sicher, dass Ihre IT-Infrastruktur auch in Zukunft effizient und skalierbar bleibt.
            </p>
          </div>
        </div>
      </section>
      {/* TESTIMONIALS */}
      <section className="py-32 px-6 bg-black text-white text-center fade-in">
        <h2 className="text-4xl sm:text-5xl font-bold mb-12">
          Was Kunden über mich sagen
        </h2>
        <div className="space-y-8">
          <div className="p-8 bg-gray-800 rounded-xl shadow-lg">
            <p className="text-xl font-semibold mb-4">
              „Die Zusammenarbeit mit Mohamad hat unsere IT-Infrastruktur auf das nächste Level gebracht. Wir können uns nun auf das Wesentliche konzentrieren, während die Systeme zuverlässig laufen.“
            </p>
            <p className="text-gray-400">– Max Müller, Geschäftsführer, XYZ GmbH</p>
          </div>
          <div className="p-8 bg-gray-800 rounded-xl shadow-lg">
            <p className="text-xl font-semibold mb-4">
              „Dank Mohamads Beratung konnten wir erhebliche Kosten einsparen und gleichzeitig die Effizienz steigern. Ein echter Gewinn für unser Unternehmen.“
            </p>
            <p className="text-gray-400">– Anna Schmitt, CTO, ABC GmbH</p>
          </div>
        </div>
      </section>

      {/* LEISTUNGEN */}
      <main className="flex-1 px-6 sm:px-12 py-32 bg-gray-900" id="leistungen">
        <h2 className="text-4xl sm:text-5xl font-bold text-center text-white mb-12">
          Meine Leistungen für Ihr Unternehmen
        </h2>
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          <div className="p-10 bg-gray-800 rounded-xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 fade-in">
            <Image
              src="/icons/consulting.svg"
              alt="Beratung"
              width={60}
              height={60}
              className="mb-6"
            />
            <h3 className="text-2xl font-semibold text-white mb-4">IT-Beratung</h3>
            <p className="text-gray-400">
              Strategische Beratung für nachhaltige IT-Entwicklung und Digitalisierung.
            </p>
          </div>
          <div className="p-10 bg-gray-800 rounded-xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 fade-in">
            <Image
              src="/icons/integration.svg"
              alt="Systemintegration"
              width={60}
              height={60}
              className="mb-6"
            />
            <h3 className="text-2xl font-semibold text-white mb-4">Systemintegration</h3>
            <p className="text-gray-400">
              Optimierung und Integration von IT-Systemen, maßgeschneidert auf Ihr Unternehmen.
            </p>
          </div>
          <div className="p-10 bg-gray-800 rounded-xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 fade-in">
            <Image
              src="/icons/automation.svg"
              alt="Automatisierung"
              width={60}
              height={60}
              className="mb-6"
            />
            <h3 className="text-2xl font-semibold text-white mb-4">Automatisierung</h3>
            <p className="text-gray-400">
              Effiziente Prozessautomatisierung, um Ihre Geschäftsabläufe zu optimieren.
            </p>
          </div>
        </div>
      </main>

      {/* KONTAKT SECTION */}
      <section id="kontakt" className="bg-black text-white py-32 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold mb-12">Kontaktieren Sie mich</h2>
        <p className="text-lg sm:text-xl max-w-2xl mx-auto mb-6">
          Ich freue mich darauf, mit Ihnen zusammenzuarbeiten. Kontaktieren Sie mich noch heute für maßgeschneiderte IT-Lösungen.
        </p>
        <div className="flex justify-center">
          <a
            href="mailto:info@mohamadfawaz.de"
            className="inline-block px-8 py-4 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-all"
          >
            Jetzt E-Mail senden
          </a>
        </div>
      </section>

      {/* DATENSCHUTZ */}
      <section id="datenschutz" className="bg-gray-900 text-white px-6 py-16 fade-in text-center">
        <h2 className="text-3xl font-bold mb-6">Datenschutzerklärung</h2>
        <p>
          Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen. Wir verarbeiten Ihre Daten daher ausschließlich auf Grundlage der gesetzlichen Bestimmungen (DSGVO, TMG).
        </p>
        <p className="mt-4">
          Beim Besuch dieser Website werden keine personenbezogenen Daten ohne Ihre ausdrückliche Zustimmung gespeichert. Server-Logs (z.B. IP-Adresse, Zeitpunkt des Zugriffs, Browsertyp) werden ausschließlich zur technischen Sicherstellung der Website verarbeitet.
        </p>
        <p className="mt-4">
          Wenn Sie per E-Mail Kontakt mit uns aufnehmen, werden Ihre Angaben zwecks Bearbeitung der Anfrage sowie für den Fall von Anschlussfragen sechs Monate bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
        </p>
        <p className="mt-4">
          Sie haben jederzeit das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit sowie Widerspruch. Wenn Sie glauben, dass die Verarbeitung Ihrer Daten gegen das Datenschutzrecht verstößt, kontaktieren Sie uns bitte.
        </p>
      </section>

      {/* IMPRESSUM */}
      <section
        id="impressum"
        className="bg-gray-800 text-white px-6 py-16 fade-in text-center"
      >
        <h2 className="text-3xl font-bold mb-6">Impressum</h2>
        <p>
          Angaben gemäß § 5 TMG:
          <br />
          Mohamad Fawaz<br />
          IT-Systemmanagement<br />
          Musterstraße 123<br />
          12345 Musterstadt<br />
        </p>
        <p className="mt-4">
          Kontakt:
          <br />
          Telefon: 0123 / 456789<br />
          E-Mail: info@mohamadfawaz.de
        </p>
        <p className="mt-4">
          Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:<br />
          Mohamad Fawaz<br />
          Musterstraße 123, 12345 Musterstadt
        </p>
      </section>

      {/* FOOTER */}
      <footer className="mt-auto py-12 text-center text-gray-400 bg-gray-900 space-y-4">
        <p>© {new Date().getFullYear()} Mohamad Fawaz. Alle Rechte vorbehalten.</p>
        <div className="space-x-6">
          <a href="#impressum" className="hover:underline">
            Impressum
          </a>
          <a href="#datenschutz" className="hover:underline">
            Datenschutzerklärung
          </a>
        </div>
      </footer>
    </div>
  );
}

