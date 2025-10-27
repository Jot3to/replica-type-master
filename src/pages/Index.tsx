import { Hero } from "@/components/Hero";
import { ContentSection } from "@/components/ContentSection";
import { ContentBlock } from "@/components/ContentBlock";
import { FeaturedImage } from "@/components/FeaturedImage";
import { ClosingSection } from "@/components/ClosingSection";
import proposalBeach from "@/assets/paula-joaquin-proposal.jpg";
import planningTogether from "@/assets/paula-joaquin-planning.jpg";
import europeTrip from "@/assets/paula-joaquin-europe.jpg";

const Index = () => {
  return (
    <main className="min-h-screen bg-white">
      <Hero 
        badge="💕 Historia Real"
        title="De casi elegir el retail a encontrar la libertad: la historia de Paula y Joaquín"
        subtitle="Cuando Joaquín me pidió matrimonio en la playa de Zapallar, lo primero que hice (después de llorar y decir que sí mil veces) fue llamar a mi mamá. Lo segundo fue entrar en pánico absoluto. No por el matrimonio, obviamente. Por todo lo que venía después: el lugar, el vestido, los invitados, la decoración... y la famosa lista de novios."
        author="Paula Morales"
        date="Marzo 2024"
        imageSrc={proposalBeach}
        imageAlt="Paula y Joaquín en la playa de Zapallar"
      />

      <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-4xl bg-white">
        <ContentSection title="🏬 El camino 'obvio' que no nos convencía">
          <p>
            "Tienen que ir a Falabella", me dijo mi tía. "En Paris tienen buenos descuentos", agregó mi prima. Era como si hubiera un manual no escrito de cómo hacer las cosas, y todos lo conocían menos nosotros.
          </p>
          <p>
            Joaquín y yo fuimos un sábado. Recorrimos pasillos llenos de tostadoras, juegos de sábanas, batidoras y ollas. Todo muy lindo, muy ordenado, muy... impersonal.
          </p>
          <p>
            "¿En serio vamos a pedir esto?", le pregunté a Joaquín cuando nadie nos escuchaba.
          </p>
          <p>
            "No sé", me respondió con cara de confundido. "¿Necesitamos tres tipos de sartenes diferentes?"
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
            Pero había algo más. Algo que descubrí después, cuando empecé a investigar de verdad.
          </p>

          <ContentBlock title="La experiencia de Daniela">
            <p>
              Mi amiga Daniela, que se casó seis meses antes, me contó su experiencia con Novios Paris: "Paula, nadie me dijo que si tenía deuda en la tarjeta Cencosud, el dinero de los regalos se iba directo a pagar esa deuda. Junté como dos millones y ni siquiera pude verlos. Se fueron completos a la tarjeta."
            </p>
            <p>
              Me quedé helada.
            </p>
          </ContentBlock>

          <ContentBlock title="Los descuentos que no eran">
            <p>
              Otra amiga me contó que los descuentos que prometen no son tan así. "Te dicen que compras en Paris, Easy y Jumbo para acumular puntos, pero después te enteras que solo cuentan los de Paris. Me sentí engañada", me dijo Constanza.
            </p>
          </ContentBlock>

          <ContentBlock title="Precios que cambian solos">
            <p>
              Y Javiera me compartió algo peor: "Actualicé mi lista y los precios que había puesto se redujeron a la mitad automáticamente. Además, el stock se acababa a cada rato y la gente no podía seguir regalando. Fue un cacho constante."
            </p>
          </ContentBlock>

          <p>
            Empecé a sumar: tarjeta de crédito con condiciones que nadie te explica bien, descuentos que no son lo que parecen, precios que cambian, stock que se agota. ¿Esto era lo "seguro"? ¿Esto era lo "tradicional"?
          </p>
          <p>
            No sonaba tan bien después de todo.
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
            Lo que no teníamos era el dinero para la luna de miel que soñábamos. O para ayudar con los gastos del matrimonio, que se nos estaban yendo de las manos. O simplemente para tener un colchón financiero al empezar esta nueva etapa.
          </p>
          <p>
            "Pero... ¿cómo le pedimos plata a la gente sin que suene mal? ¿Y sin que después nos amarren a una tarjeta de crédito?", le pregunté.
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
            Entré al sitio con escepticismo. Otra plataforma más, pensé. Pero mientras leía, algo empezó a hacer sentido.
          </p>
          <p>
            No era una lista de productos. Era una lista de sueños.
          </p>
          <p>
            Podíamos crear regalos imaginarios, ponerles el precio que quisiéramos, y cuando alguien los compraba, recibiríamos el dinero directo en nuestra cuenta. No una tarjeta de crédito con deudas pendientes que se cobran automáticamente. No productos que quizás no queríamos. Dinero real, limpio, para usar como mejor nos pareciera.
          </p>
          <p>
            Le mostré a Joaquín y sus ojos se iluminaron de una forma que no había visto en semanas de preparativos matrimoniales.
          </p>
          <p>
            "Esto es perfecto", dijo. "Podemos hacer regalos que realmente nos representen. Y lo mejor: sin letra chica."
          </p>
        </ContentSection>

        <ContentSection title="🤷‍♀️ La decisión (y las dudas que vinieron con ella)">
          <p>
            Obvio que tuve dudas. Millones.
          </p>
          <p>
            "¿Y si la gente piensa que somos unos rotos pidiendo plata?", le dije a Joaquín una noche.
          </p>
          <p>
            "Paula, literalmente la alternativa es que nos regalen cosas físicas que vamos a cambiar por plata en el retail. O una tarjeta de crédito que, según tus amigas, tiene mil condiciones escondidas. Esto es más honesto y más transparente", me respondió.
          </p>
          <p>
            Tenía razón. Y además, me gustaba la idea de que no habría sorpresas desagradables. El dinero llegaba a nuestra cuenta cada dos miércoles, directo. Sin intermediarios. Sin que nadie pudiera usarlo para pagar deudas que no tenían nada que ver con nuestro matrimonio.
          </p>
          <p>
            Llamé a mi mamá. "Hija, si te casaras hace 20 años, te habrían regalado sobres con plata. Esto es lo mismo pero más lindo y sin las trampas de las tarjetas", me dijo.
          </p>
          <p>
            Y ese "sin trampas" me convenció completamente.
          </p>
        </ContentSection>

        <ContentSection title="📝 La lista que nos representaba">
          <p>
            Nos tomó dos copas de vino y muchas risas crear nuestra lista.
          </p>
          <p>
            Pusimos cosas como:
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
            El mail de notificación incluía un mensaje suyo: "Para que celebren cada día de casados como si fuera el primero. Los amo."
          </p>
          <p>
            Me largué a llorar. Joaquín me abrazó. Era perfecto.
          </p>
          <p>
            Y lo mejor: ese mismo lunes, revisamos nuestra cuenta de Mi Lista de Novios en la plataforma y ahí estaba el registro. El miércoles de esa semana, tal como nos habían dicho, llegó el depósito a nuestra cuenta bancaria. Los $50.000 completos. Sin descuentos raros. Sin que se fueran a pagar ninguna deuda. Nuestros.
          </p>
        </ContentSection>

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
            Y acá va lo que realmente marca la diferencia: nunca tuvimos que preocuparnos de si ese dinero se iba a ir a otro lado. No teníamos deudas en tarjetas bancarias, pero igual nos daba tranquilidad saber que aunque las tuviéramos, ese dinero era NUESTRO. Nadie nos lo iba a quitar para pagar otra cosa.
          </p>
          <p>
            No tuvimos que estar actualizando precios porque se desactualizaron solos.
          </p>
          <p>
            No nos dijeron "ah, pero ese descuento solo aplicaba en esta tienda, no en todas como te dijimos".
          </p>
          <p>
            Fue transparente. Fue simple. Fue honesto.
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
              <li>Con la sensación de estar haciendo "lo que se debe" pero con letra chica</li>
            </ul>
          </ContentBlock>

          <ContentBlock title="Con Mi Lista de Novios tuvimos:">
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Dinero directo en nuestra cuenta bancaria</li>
              <li>Sin ninguna condición, sin tarjetas de por medio</li>
              <li>Cada regalo vino con un mensaje que guardamos</li>
              <li>Los precios que pusimos fueron los que se quedaron (sin cambios sorpresa)</li>
              <li>Nunca se "agotó el stock" de manera rara</li>
              <li>Pudimos ser creativos y honestos sobre lo que necesitábamos</li>
              <li>Nuestros invitados se divirtieron eligiendo (varios nos lo dijeron)</li>
              <li>No tuvimos que fingir que queríamos un juego de cuchillos de 24 piezas</li>
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
            ¿Qué necesito realmente? ¿Más cosas o más libertad? ¿Una tarjeta de crédito con condiciones escondidas o dinero real en mi cuenta?
          </p>
          <p>
            Para nosotros, la respuesta fue clara. Y tomamos la mejor decisión.
          </p>
          <p>
            No fue el camino "obvio". No fue lo que todos hacían. Pero fue nuestro, fue transparente, y eso lo hizo perfecto.
          </p>
          <p className="text-xl font-bold">
            Porque al final, en tu matrimonio (y en tu lista de regalos) no debería haber letra chica.
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
    </main>
  );
};

export default Index;
