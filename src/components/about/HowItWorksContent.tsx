export function HowItWorksContent() {
  return (
    <div className="py-8 sm:py-12">
      <div className="mx-auto max-w-[900px]">
        {/* Main Title */}
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-foreground mb-8 sm:mb-12">
          ¿Cómo funciona Behuman?
        </h1>

        {/* Introduction */}
        <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-gray-700 mb-10 sm:mb-14">
          Behuman es una plataforma B2B que permite a las empresas crear agentes IA personalizados (TCC) para monitorear y mejorar el bienestar emocional de sus empleados mediante soporte por voz, encuestas y dashboards organizacionales.
        </p>

        {/* Sections */}
        <div className="space-y-10 sm:space-y-14">
          {/* Section 1 */}
          <section>
            <h2 className="text-lg sm:text-xl lg:text-2xl font-serif font-bold text-foreground mb-4 sm:mb-6">
              Creación del Agente IA Personalizado
            </h2>
            <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-gray-700">
              En menos de dos minutos, cada empleado crea su propio Human dentro de la app especializado en TCC (terapia cognitivo conductual), un agente IA único adaptado a sus necesidades emocionales, que interactúa por voz de forma natural y empática.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-lg sm:text-xl lg:text-2xl font-serif font-bold text-foreground mb-4 sm:mb-6">
              Detección de Necesidades Emocionales
            </h2>
            <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-gray-700">
              El agente personal del empleado analiza conversaciones para identificar problemas como estrés, ansiedad, conflictos familiares o burnout, utilizando IA para procesar patrones emocionales en tiempo real.
            </p>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-lg sm:text-xl lg:text-2xl font-serif font-bold text-foreground mb-4 sm:mb-6">
              Propuestas de Soluciones Personalizadas
            </h2>
            <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-gray-700">
              El agente sugiere paquetes de bienestar adaptados, como sesiones de mindfulness, talleres o tiempo libre, priorizando intervenciones proactivas y confidenciales.
            </p>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-lg sm:text-xl lg:text-2xl font-serif font-bold text-foreground mb-4 sm:mb-6">
              Requests Anónimos a la Empresa
            </h2>
            <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-gray-700">
              Si se requiere apoyo organizacional (ej. cena familiar o permisos) para solucionar un problema puntual del trabajador, el Human genera solicitudes anónimas automáticas a RRHH, protegiendo la privacidad del empleado.
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-lg sm:text-xl lg:text-2xl font-serif font-bold text-foreground mb-4 sm:mb-6">
              Encuestas y Dashboard Organizacional
            </h2>
            <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-gray-700">
              Empleados responden encuestas regulares sobre estrés, ansiedad y depresión vía WebApp; los datos agregados forman un dashboard anónimo para medir el estado de ánimo global, estrés por departamento, entre otras y mida el ROI mediante reducción de rotación y mayor productividad.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
