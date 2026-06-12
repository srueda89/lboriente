import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { PollaHero } from "@/components/polla/PollaHero";

export default function TratamientoDatosPage() {
  return (
    <main className="px-6 py-10">
      <div className="mx-auto max-w-6xl space-y-8">
        <Breadcrumb items={[{ label: "Tratamiento de datos" }]} />

        <PollaHero
          title="Autorización de tratamiento de datos"
          description="Información básica sobre el uso de datos personales en la Polla Mundial LBOriente."
        />

        <section className="max-w-3xl rounded-3xl border border-blue-300/15 bg-blue-950/25 p-6 text-sm leading-7 text-blue-50/75 shadow-lg shadow-blue-950/25 sm:p-8">
          <div className="space-y-5">
            <p>
              Al ingresar a la Polla Mundial LBOriente, autorizas de manera
              previa, expresa e informada el tratamiento de tus datos personales
              básicos para gestionar tu participación en la dinámica.
            </p>

            <p>
              Los datos tratados serán únicamente los necesarios para el
              funcionamiento de la polla: nombre, correo electrónico, imagen de
              perfil asociada al proveedor de autenticación si está disponible,
              predicciones realizadas, puntos obtenidos y posición en el
              ranking.
            </p>

            <p>
              Estos datos se usarán para identificar a los participantes,
              permitir el acceso a la plataforma, registrar pronósticos, calcular
              puntajes, mostrar el ranking y administrar la dinámica interna del
              grupo.
            </p>

            <p>
              No se solicitarán documentos de identidad, datos financieros,
              información sensible ni datos adicionales que no sean necesarios
              para la actividad.
            </p>

            <p>
              Como titular de tus datos personales, puedes solicitar información
              sobre el uso de tus datos, pedir actualización, corrección o
              eliminación cuando corresponda, así como revocar la autorización de
              tratamiento.
            </p>

            <p>
              Para cualquier solicitud relacionada con datos personales, puedes
              contactar a los administradores de LBOriente por los canales
              oficiales del grupo.
            </p>

            <p className="text-xs text-blue-100/50">
              Esta dinámica es privada, recreativa y dirigida al grupo de amigos
              participante. No corresponde a una actividad de apuestas ni manejo
              de dinero.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}