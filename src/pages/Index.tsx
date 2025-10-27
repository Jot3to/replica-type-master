import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ContentSection } from "@/components/ContentSection";
import { ContentBlock } from "@/components/ContentBlock";
import { FeaturedImage } from "@/components/FeaturedImage";
import { ClosingSection } from "@/components/ClosingSection";
import { FloatingButton } from "@/components/FloatingButton";
import proposalBeach from "@/assets/paula-joaquin-proposal.jpg";
import planningTogether from "@/assets/paula-joaquin-planning.jpg";
import europeTrip from "@/assets/paula-joaquin-europe.jpg";
import celebration from "@/assets/paula-joaquin-celebration.jpg";
import weddingDay from "@/assets/paula-joaquin-wedding.jpg";

const Index = () => {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero
        badge="💕 Historia Real"
        title="Así pagaron su luna de miel en Europa solo con su lista de regalos: La historia de Paula y Joaquín"
        subtitle="Cuando Joaquín me pidió matrimonio, lo primero que hice (después de llorar y decir que sí mil veces) fue llamar a mi mamá. Lo segundo fue entrar en pánico absoluto. No por el matrimonio, obviamente. Por todo lo que venía después: el lugar, el vestido, los invitados, la decoración... y la famosa lista de novios."
        author="Paula Huera"
        date="Marzo 2024"
        imageSrc={proposalBeach}
        imageAlt="Paula y Joaquín en la playa de Zapallar"
      />

      <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-4xl bg-white">
        <ContentSection title="🏬 El camino 'obvio' que no nos convencía">
          <p>
            "Tienen que ir a Falabella", me dijo mi tía. "En Paris tienen buenos descuentos", agregó mi mamá. Era como si hubiera un manual no escrito de cómo hacer las cosas, y todos lo conocían menos nosotros.
          </p>
          <p>
            Joaquín y yo fuimos un sábado. Recorrimos pasillos llenos de tostadoras, juegos de sábanas, batidoras y ollas. Todo muy lindo, muy ordenado, todo muy... impersonal.
          </p>
          <p>
            "¿En serio vamos a pedir esto?", "¿Necesitamos tres tipos de sartenes diferentes?"
          </p>
          <p>
            La vendedora nos explicó el sistema: eliges productos del catálogo, tus invitados los compran, y después te dan una tarjeta de crédito con el monto. O los productos físicos si los prefieres.
          </p>
          <p>
            Sonaba práctico. Sonaba seguro. Sonaba... aburrido.
          </p>
        </ContentSection>

        <ContentSection title="⚠️ Las letras chicas que nadie te cuenta">
          <p>
            Lo primero fue investigar ¿y dónde? En matrimonios.cl, y lamentablemente nos encontramos con mensajes como estos:
          </p>

          <ContentBlock>
            <p className="italic border-l-4 border-primary pl-4">
              "Elegimos novios Paris porque nos pareció buena opción, pero si van a elegir el plan tarjeta Cencosud tengan en claro que si tienes la tarjeta ocupada y/o con deuda el valor que logres reunir de tus regalos se van completo a pagar la tarjeta!!! Estando al día o no. Se paga la tarjeta al traspasar el valor a tu tarjeta Cencosud. Si me hubieran dicho esto previo a elegir novios Paris jamás los hubiese elegido."
            </p>
            <p>
              Me quedé helada. ¿El dinero de los regalos se iba automáticamente a pagar deudas? Seguí leyendo y encontré más:
            </p>
            <p className="italic border-l-4 border-primary pl-4">
              "No es lo que te ofrecen. Te dicen que debes comprar en Paris, Easy y Jumbo para acceder a los beneficios de Plan Tarjeta Plus y después del matrimonio nos enteramos que solo cuentan los puntos de Paris. Realmente es pésimo el servicio porque es engañosa la forma que lo plantean."
            </p>
            <p>
              Y esto fue lo que más me impactó:
            </p>
            <p className="italic border-l-4 border-primary pl-4">
              "Considero que la lista de novios Paris es una buena opción para aquellos que buscan recibir el regalo físico, pero no es para nada conveniente para aquellos que buscamos recibir el dinero en la tarjeta. Además, debes actualizar constantemente la lista ya que el stock de todo se acaba extremadamente rápido y la gente no puede seguir dando regalos."
            </p>
          </ContentBlock>

          <p>
            Empecé a sumar: tarjeta de crédito que paga tus deudas automáticamente con el dinero de los regalos, descuentos que no son lo que parecen, precios que cambian solos, stock que se agota constantemente.
          </p>
          <p>
            ¿Esto era lo "seguro"? ¿Esto era lo "tradicional"? No sonaba tan bien después de todo.
          </p>
        </ContentSection>

        <FeaturedImage 
          src={planningTogether}
          alt="Paula y Joaquín planificando su matrimonio"
        />

        <ContentSection title="💡 La conversación que cambió todo">
          <p>
            Una noche, tomando vino en el departamento, Joaquín me dijo algo que me quedó dando vueltas:
          </p>
          <p className="italic text-lg border-l-4 border-primary pl-4">
            "¿Sabes qué me gustaría? Que la gente nos ayudara a cumplir sueños, no a llenar la casa de cosas que probablemente ya tenemos o que ni siquiera necesitamos. Y que ese dinero sea nuestro de verdad, sin ataduras."
          </p>
          <p>
            Tenía razón. Llevábamos tres años viviendo juntos. Ya teníamos tostadora (nos la regaló su mamá). Ya teníamos sábanas. Ya teníamos todo lo básico.
          </p>
          <p>
            Lo que no teníamos era el dinero para la luna de miel que soñábamos. O para ayudar con los gastos del matrimonio, que se nos estaban yendo de las manos. O simplemente para tener un colchón al empezar esta nueva etapa.
          </p>
          <p>
            "Pero... ¿cómo le pedimos plata a la gente sin que suene mal?"
          </p>
          <p>
            Y ahí es cuando mi cuñada, bendita sea, nos mandó un link por WhatsApp.
          </p>
          <p>
            "Miren esto", decía el mensaje. "Nosotros lo usamos y fue lo mejor. Recibimos el dinero directo en la cuenta, sin tarjetas ni condiciones raras."
          </p>
        </ContentSection>

        <ContentSection title="✨ Mi Lista de Novios: cuando algo hace click">
          <p>
            Entré al sitio con escepticismo, pero mientras leía, algo empezó a hacer sentido.
          </p>
          <p>
            No era una lista de productos. Era una lista de sueños.
          </p>
          <p>
            Podíamos crear regalos imaginarios, ponerles el precio que quisiéramos, y cuando alguien los compraba, recibiríamos el dinero directo en nuestra cuenta.
          </p>
          <p>
            No una tarjeta de crédito; no productos que quizás no queríamos. Dinero real para usar como mejor nos pareciera.
          </p>
          <p>
            Le mostré a Joaquín y sus ojos se iluminaron de una forma que no había visto en semanas de preparativos matrimoniales.
          </p>
          <p>
            "Esto es perfecto", dijo. "Podemos hacer regalos que realmente nos representen. Y lo mejor: sin letra chica."
          </p>
        </ContentSection>


        <ContentSection title="📝 La lista que nos representaba">
          <p>
            Nos tomó dos copas de vino y muchas risas crear nuestra lista. Al final pusimos cosas como:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>"Una luna de miel inolvidable en Europa" (que dividimos en varios regalos: vuelos, hoteles, cenas románticas)</li>
            <li>"Un brindis eterno" (porque Joaquín ama el vino)</li>
            <li>"Bailar hasta que nos duelan los pies" (para la fiesta)</li>
            <li>"Vivir juntos hasta viejitos" (el más caro y el que más nos gustaba)</li>
            <li>"Nuestra primera casa propia" (para ir ahorrando)</li>
          </ul>
          <p>
            Cada regalo tenía una descripción personal, algo de nosotros. No era una olla arrocera modelo XZ-123. Era nuestra historia, nuestros sueños, nuestro futuro.
          </p>
          <p>
            Y nosotros decidíamos el precio de cada uno. Sin que nadie lo cambiara después. Sin que el stock se "agotara" misteriosamente.
          </p>
        </ContentSection>

        <ContentSection title="🎯 Los beneficios extra que no esperábamos">
          <p>
            A la semana de crear la lista, me llegó un mail del equipo: "Hola Paula, si necesitas ayuda para que tus invitados vean tu lista, podemos enviarles un correo de tu parte. Solo envíanos los contactos. Es gratis."
          </p>
          <p>
            Dos meses antes del matrimonio, varios invitados no habían entrado. Les pedimos ayuda. En tres días nos escribieron: "Listo, les enviamos el mail a todos." Funcionó perfecto.
          </p>
          <p>
            Y después descubrimos algo increíble: por cada regalo recibido millas LATAM Pass. Terminamos con 2.500 millas que usamos para vuelos internos en Europa durante la luna de miel.
          </p>
          <p>
            "Esto es un regalo dentro del regalo", me dijo Joaquín cuando reservamos los vuelos casi gratis.
          </p>
        </ContentSection>

        <ContentSection title="🎁 El momento de la verdad">
          <p>
            Enviamos nuestra lista junto con los partes de matrimonio. Le pusimos un código QR y también el link directo.
          </p>
          <p>
            Y esperamos.
          </p>
          <p>
            El primer regalo llegó dos días después. Era de mi mejor amiga, Cata. Nos había "regalado" "Un brindis que nunca se acaba" por $50.000.
          </p>
          <p>
            El mail de notificación incluía un mensaje suyo: "Para que celebren cada día de casados como si fuera el primero. Los amo." (y muchas otras palabras que me voy a guardar).
          </p>
          <p>
            Me largué a llorar. Joaquín me abrazó. Era perfecto.
          </p>
          <p>
            Y lo mejor: ese mismo lunes, revisamos nuestra cuenta de Mi Lista de Novios en la plataforma y ahí estaba el registro. El miércoles de esa semana, tal como nos habían dicho, llegó el depósito a nuestra cuenta bancaria. Los $50.000 completos. Sin descuentos raros. Sin que se fueran a pagar ninguna deuda. Nuestros.
          </p>
        </ContentSection>

        <FeaturedImage 
          src={celebration}
          alt="Paula y Joaquín brindando en su matrimonio"
        />

        <ContentSection title="💝 Lo que nadie te cuenta (la versión honesta)">
          <p>
            Los regalos empezaron a llegar. Y con cada uno, un mensaje personalizado. Nuestros invitados se tomaban el tiempo de escribirnos algo lindo, de conectar con el regalo que elegían.
          </p>
          <p>
            Eso nunca habría pasado con una tostadora.
          </p>

          <ContentBlock title="Mensajes que guardamos">
            <p>
              Mi tío nos "regaló" parte de los vuelos a Europa. "Para que conozcan de dónde venían mis papás", escribió.
            </p>
            <p>
              La amiga de Joaquín nos dio "Una noche de película" (que era para Netflix y vino, pero con su toque personal). "Para cuando se queden en casa siendo viejitos", decía su mensaje.
            </p>
          </ContentBlock>

          <p>
            Cada regalo era dinero real en nuestra cuenta (que llegaba cada dos miércoles, super puntual), pero también era un pedacito de cariño de la gente que nos quiere.
          </p>
          <p>
            Fue transparente. Fue simple. Fue honesto. Fue hermoso.
          </p>
        </ContentSection>

        <ContentSection title="⚖️ La diferencia real (sin filtro)">
          <p>
            Miren, sé que esto suena a comercial, pero juro que no lo es. Es simplemente mi experiencia real, con todo incluido.
          </p>

          <ContentBlock title="Con el retail habríamos tenido:">
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Una tarjeta de crédito con condiciones (que probablemente habría usado dinero de los regalos para pagar deudas anteriores, como le pasó a Daniela)</li>
              <li>O productos que probablemente habríamos cambiado por plata (con más trámites)</li>
              <li>Descuentos que no son lo que prometen (como descubrió Constanza)</li>
              <li>Precios que cambian solos y stock que se agota (como le pasó a Javiera)</li>
              <li>Sin mensajes personalizados</li>
              <li>Con la sensación de estar haciendo "lo típico"</li>
            </ul>
          </ContentBlock>

          <ContentBlock title="Con Mi Lista de Novios tuvimos:">
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Dinero directo en nuestra cuenta bancaria</li>
              <li>Sin ninguna condición, sin tarjetas de por medio</li>
              <li>Cada regalo vino con un mensaje que guardamos</li>
              <li>Acumulamos Millas LATAM Pass</li>
              <li>Pudimos ser creativos y honestos sobre lo que necesitábamos</li>
              <li>Nuestros invitados se divirtieron eligiendo (varios nos lo dijeron)</li>
              <li>Nos ayudaron contactando a nuestros invitados</li>
              <li>Y lo más importante: el dinero fue 100% nuestro desde el primer momento</li>
            </ul>
          </ContentBlock>
        </ContentSection>

        <ContentSection title="🌟 El final feliz (literal)">
          <p>
            Con el dinero de los regalos pagamos buena parte de la luna de miel. Tres semanas en Europa que jamás habríamos podido costear solos.
          </p>
          <p>
            También guardamos una parte. Ese "colchón" que toda pareja necesita al empezar.
          </p>
          <p>
            Y sí, compramos algunas cosas para la casa. Pero las que nosotros elegimos, cuando las necesitamos, sin apuro ni presión. Con nuestro dinero, que estaba en nuestra cuenta, sin ataduras.
          </p>
          <p>
            Hoy, cada vez que veo las fotos de París o cuando uso esa cafetera italiana que compramos en Roma, no pienso en "el regalo que nos dio el primo de Joaquín". Pienso en todos los que nos ayudaron a cumplir ese sueño.
          </p>
          <p>
            Y pienso en lo cerca que estuvimos de elegir la opción "segura" que al final tenía más trampas que beneficios.
          </p>
        </ContentSection>

        <ContentSection title="💬 Mi consejo (que nadie me pidió pero igual doy)">
          <p>
            Si estás por casarte y estás en ese momento de decidir qué hacer con los regalos, pregúntate esto:
          </p>
          <p className="text-lg font-semibold">
            ¿Qué necesito realmente? ¿Más cosas o más libertad? ¿Una tarjeta de crédito o el dinero en tu cuenta?
          </p>
          <p>
            Para nosotros, la respuesta fue clara. Y tomamos la mejor decisión. Fue nuestra lista, una lista única y que nos encantó.
          </p>
          <p className="text-xl font-bold">
            Porque al final, en tu matrimonio (y en tu lista de regalos) no debería haber letra chica.
          </p>
          <p className="mt-4">
            Paula y Joaquín - Casados en Marzo 2024
          </p>
        </ContentSection>
      </div>
      
      <ClosingSection 
        imageSrc={europeTrip}
        imageAlt="Paula y Joaquín en su luna de miel en Europa"
        title="🎁 Crea tu propia historia sin letra chica"
        content="Paula y Joaquín se casaron en marzo de 2024. Hoy están planeando su segundo viaje, esta vez a Asia, con los ahorros que pudieron hacer gracias a la libertad que les dio empezar su matrimonio sin deudas de tarjetas de crédito ni condiciones escondidas."
        authorNote="Paula y Joaquín - Casados en Marzo 2024"
        ctaText="¿Lista para crear tu propia historia sin letra chica? Regístrate gratis en milistadenovios.cl"
      />
      
      <FloatingButton />
    </main>
  );
};

export default Index;
