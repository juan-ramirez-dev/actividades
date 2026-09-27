import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Términos y condiciones — Nocturna",
  description: "Condiciones de compra de fondos de pantalla digitales en Nocturna.",
};

const sections = [
  {
    title: "1. Qué vende Nocturna",
    body: [
      "Nocturna es una plataforma que vende exclusivamente fondos de pantalla digitales de colección. Al comprar, adquieres un archivo digital para uso personal; no adquieres ningún otro bien, servicio ni derecho distinto al fondo de pantalla.",
    ],
  },
  {
    title: "2. Entrega y soporte",
    body: [
      "El fondo de pantalla se envía al correo electrónico registrado en la compra y queda disponible en la sección “Mis fondos”, donde puedes buscarlo con ese mismo correo.",
      "Nocturna presta soporte únicamente sobre el archivo digital (descarga, visualización, reenvío) y sobre el proceso de pago realizado en la plataforma.",
    ],
  },
  {
    title: "3. Actividades y organizadores",
    body: [
      "Cada actividad publicada en Nocturna es creada y administrada por un organizador independiente, cuyo nombre aparece en la ficha de la actividad.",
      "Todo lo asociado a una actividad —incluida la definición de sus reglas, la verificación y asignación de números, la entrega de bienes, trámites, impuestos, costos, logística, permisos y cualquier reclamación relacionada— está 100 % a cargo del organizador de la actividad.",
      "Nocturna no es parte de la relación entre el organizador y los compradores en lo que respecta a lo asociado a la actividad, y no asume responsabilidad alguna por su cumplimiento. Cualquier inquietud sobre esos aspectos debe dirigirse directamente al organizador.",
    ],
  },
  {
    title: "4. Número del fondo de pantalla",
    body: [
      "Cada fondo de pantalla incluye un número único como parte de su diseño. El uso que el organizador haga de ese número dentro de su actividad se rige por las reglas que él mismo publique y administre.",
    ],
  },
  {
    title: "5. Precios, pagos y retracto",
    body: [
      "Los precios se expresan en pesos colombianos (COP) e incluyen los impuestos aplicables. El pago se procesa a través de pasarelas de terceros.",
      "Las condiciones de retracto y reversión del pago se aplican conforme al Estatuto del Consumidor (Ley 1480 de 2011) y demás normas vigentes, teniendo en cuenta la naturaleza digital del producto.",
    ],
  },
  {
    title: "6. Datos personales",
    body: [
      "Los datos que registras (nombre, correo y teléfono) se usan para entregar tu fondo de pantalla, darte soporte y compartirlos con el organizador de la actividad que elegiste, de acuerdo con la Ley 1581 de 2012. Puedes conocer, actualizar o solicitar la supresión de tus datos escribiendo a nuestro canal de soporte.",
    ],
  },
  {
    title: "7. Contacto",
    body: [
      "Para temas del fondo de pantalla o del pago: soporte@nocturna.example. Para temas de la actividad: el contacto del organizador que aparece en cada actividad.",
    ],
  },
];

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#11100e]">
      <SiteHeader back />
      <section className="mx-auto max-w-3xl px-6 py-20 sm:px-10 sm:py-28">
        <p className="mb-5 text-[10px] uppercase tracking-[0.3em] text-[#c9a34e]">Legal</p>
        <h1 className="display text-6xl leading-[.85] sm:text-8xl">Términos y<br /><em>condiciones.</em></h1>
        <p className="mt-8 max-w-xl text-sm leading-6 text-[#938d82]">Nocturna vende fondos de pantalla digitales. Lo asociado a cada actividad es responsabilidad exclusiva de su organizador.</p>
        <div className="mt-16 space-y-12 border-t border-white/10 pt-12">
          {sections.map((section) => (
            <article key={section.title}>
              <h2 className="mb-4 text-sm uppercase tracking-[0.18em] text-[#f2eee6]">{section.title}</h2>
              <div className="space-y-4">{section.body.map((paragraph) => <p key={paragraph} className="text-sm leading-7 text-[#b7b0a5]">{paragraph}</p>)}</div>
            </article>
          ))}
        </div>
        <p className="mt-16 text-xs text-[#716b62]">Última actualización: septiembre de 2026.</p>
      </section>
    </main>
  );
}
