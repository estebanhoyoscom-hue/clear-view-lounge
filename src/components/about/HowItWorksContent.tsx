import { Mail, Phone } from 'lucide-react';

export function HowItWorksContent() {
  return (
    <div className="py-8 sm:py-12">
      <div className="mx-auto max-w-[1200px]">
        {/* Two-Column Grid: 60% content, 40% portrait */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-12">
          {/* Left Column - Content (60% = 3/5) */}
          <div className="lg:col-span-3 flex flex-col">
            <div className="space-y-8 sm:space-y-12">
              {/* Main Title & Introduction */}
              <section>
                <h1 className="text-lg sm:text-xl lg:text-[1.75rem] leading-tight font-serif font-bold text-foreground mb-4 sm:mb-6">
                  ¿Cómo funciona Behuman?
                </h1>
                <p className="text-sm sm:text-base lg:text-[1.0625rem] leading-relaxed text-gray-700">
                  Behuman es una plataforma B2B que permite a las empresas crear agentes IA personalizados (TCC) para monitorear y mejorar el bienestar emocional de sus empleados mediante soporte por voz, encuestas y dashboards organizacionales.
                </p>
              </section>

              {/* Section 1 */}
              <section>
                <h2 className="text-lg sm:text-xl lg:text-[1.75rem] leading-tight font-serif font-bold text-foreground mb-4 sm:mb-6">
                  Creación del Agente IA Personalizado
                </h2>
                <p className="text-sm sm:text-base lg:text-[1.0625rem] leading-relaxed text-gray-700">
                  En menos de dos minutos, cada empleado crea su propio Human dentro de la app especializado en TCC (terapia cognitivo conductual), un agente IA único adaptado a sus necesidades emocionales, que interactúa por voz de forma natural y empática.
                </p>
              </section>

              {/* Section 2 */}
              <section>
                <h2 className="text-lg sm:text-xl lg:text-[1.75rem] leading-tight font-serif font-bold text-foreground mb-4 sm:mb-6">
                  Detección de Necesidades Emocionales
                </h2>
                <p className="text-sm sm:text-base lg:text-[1.0625rem] leading-relaxed text-gray-700">
                  El agente personal del empleado analiza conversaciones para identificar problemas como estrés, ansiedad, conflictos familiares o burnout, utilizando IA para procesar patrones emocionales en tiempo real.
                </p>
              </section>

              {/* Section 3 */}
              <section>
                <h2 className="text-lg sm:text-xl lg:text-[1.75rem] leading-tight font-serif font-bold text-foreground mb-4 sm:mb-6">
                  Propuestas de Soluciones Personalizadas
                </h2>
                <p className="text-sm sm:text-base lg:text-[1.0625rem] leading-relaxed text-gray-700">
                  El agente sugiere paquetes de bienestar adaptados, como sesiones de mindfulness, talleres o tiempo libre, priorizando intervenciones proactivas y confidenciales.
                </p>
              </section>

              {/* Section 4 */}
              <section>
                <h2 className="text-lg sm:text-xl lg:text-[1.75rem] leading-tight font-serif font-bold text-foreground mb-4 sm:mb-6">
                  Requests Anónimos a la Empresa
                </h2>
                <p className="text-sm sm:text-base lg:text-[1.0625rem] leading-relaxed text-gray-700">
                  Si se requiere apoyo organizacional (ej. cena familiar o permisos) para solucionar un problema puntual del trabajador, el Human genera solicitudes anónimas automáticas a RRHH, protegiendo la privacidad del empleado.
                </p>
              </section>

              {/* Section 5 */}
              <section>
                <h2 className="text-lg sm:text-xl lg:text-[1.75rem] leading-tight font-serif font-bold text-foreground mb-4 sm:mb-6">
                  Encuestas y Dashboard Organizacional
                </h2>
                <p className="text-sm sm:text-base lg:text-[1.0625rem] leading-relaxed text-gray-700">
                  Empleados responden encuestas regulares sobre estrés, ansiedad y depresión vía WebApp; los datos agregados forman un dashboard anónimo para medir el estado de ánimo global, estrés por departamento, entre otras y mida el ROI mediante reducción de rotación y mayor productividad.
                </p>
              </section>
            </div>

            {/* Contact Information Section */}
            <section className="border-t border-gray-200 pt-6 sm:pt-8 mt-auto">
              <h2 className="text-lg sm:text-xl lg:text-[1.75rem] leading-tight font-serif font-bold text-foreground mb-4 sm:mb-6">
                Contáctanos
              </h2>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 flex-shrink-0" />
                  <a
                    href="mailto:hello@behuman.ai"
                    className="text-sm sm:text-base lg:text-[1.0625rem] leading-snug text-gray-700 hover:text-foreground transition-colors"
                  >
                    hello@behuman.ai
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 flex-shrink-0" />
                  <a
                    href="tel:+525555550187"
                    className="text-sm sm:text-base lg:text-[1.0625rem] leading-snug text-gray-700 hover:text-foreground transition-colors"
                  >
                    +52 (55) 5555-0187
                  </a>
                </div>
              </div>
              <p className="mt-4 sm:mt-6 text-xs sm:text-sm lg:text-[0.9375rem] leading-relaxed text-gray-500">
                Disponible para demos, implementaciones empresariales y proyectos de bienestar organizacional.
              </p>
            </section>
          </div>

          {/* Right Column - Image (40% = 2/5) */}
          <div className="lg:col-span-2">
            <img
              src="https://images.pexels.com/photos/11052798/pexels-photo-11052798.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="Behuman - Plataforma de bienestar emocional"
              className="w-full h-auto rounded-sm shadow-sm"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </div>
  );
}