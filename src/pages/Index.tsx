import { Hero } from "@/components/Hero";
import { ContentSection } from "@/components/ContentSection";
import { ContentBlock } from "@/components/ContentBlock";
import { FeaturedImage } from "@/components/FeaturedImage";
import { ClosingSection } from "@/components/ClosingSection";
import coupleHoneymoon from "@/assets/couple-honeymoon.jpg";
import couplePlanning from "@/assets/couple-planning.jpg";
import weddingCelebration from "@/assets/wedding-celebration.jpg";

const Index = () => {
  return (
    <main className="min-h-screen bg-white">
      <Hero 
        badge="💕 Historia Real"
        title="La historia de Camila y Nico: cómo convirtieron los regalos de su matrimonio en la luna de miel de sus sueños"
        subtitle="Hola, soy Camila. Me casé en 2024 y hoy quiero contarte cómo, sin esperarlo, terminamos financiando nuestra luna de miel con algo tan simple como nuestra lista de regalos."
        author="Camila y Nico"
        date="Enero 2025"
        imageSrc={coupleHoneymoon}
        imageAlt="Camila y Nico en su luna de miel"
      />

      <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-4xl bg-white">
        <ContentSection title="💒 Nuestro matrimonio fue un sueño">
          <p>
            Después de meses de planificación, de listas infinitas y presupuestos que no paraban de crecer, el gran día llegó y todo valió la pena.
          </p>
          <p>
            Fue mágico: la gente que queríamos, la música perfecta, y la sensación de estar empezando una nueva etapa juntos.
          </p>
          <p>
            Pero durante esos meses, mientras definíamos el lugar, la comida y los proveedores, llegó una decisión que parecía menor y terminó marcando la diferencia: la lista de regalos.
          </p>
          <p>
            Queríamos hacerla bien, así que fuimos directo a las listas del retail, como todos. Entramos a las páginas de Novios París y Falabella convencidos de que era lo lógico. Y fue una desilusión inmediata.
          </p>
        </ContentSection>

        <ContentSection title="💔 La desilusión de las listas tradicionales">
          <p>
            Era como navegar por un catálogo de supermercado: tostadoras, sábanas, licuadoras, vajillas. Nada tenía que ver con nosotros.
          </p>

          <ContentBlock title="No queríamos más cosas">
            <p>
              No queríamos llenar la casa de cosas que ya teníamos; queríamos vivir experiencias. Soñábamos con viajar, con nuestra luna de miel. Pero claro, después de todos los gastos, parecía imposible.
            </p>
          </ContentBlock>

          <ContentBlock title="La letra chica">
            <p>
              Las tarjetas, los puntos, las condiciones, los descuentos que duraban poco o aplicaban solo en ciertas tiendas. Todo se sentía diseñado para favorecer a la tienda, no a los novios.
            </p>
          </ContentBlock>

          <ContentBlock title="El descubrimiento">
            <p>
              Hasta que una amiga nos habló de Mi Lista de Novios. Nos dijo que habían hecho su lista ahí y que con eso habían pagado su luna de miel. Nos contó que podían inventar los regalos, poner precios y recibir el dinero directo en su cuenta. Sin tarjetas, sin comisiones escondidas, sin complicaciones.
            </p>
          </ContentBlock>

          <p>
            Esa misma noche entramos al sitio y fue un alivio. Por fin algo distinto.
          </p>
        </ContentSection>

        <FeaturedImage 
          src={couplePlanning}
          alt="Pareja planificando su boda juntos"
        />

        <ContentSection title="✨ Cómo funcionó para nosotros">
          <p>
            Creamos una lista con sueños en vez de cosas: "Cena frente al mar", "Excursión en kayak", "Cervezas infinitas para Nico". Cada regalo tenía historia.
          </p>

          <ContentBlock title="Mensajes llenos de cariño">
            <p>
              Nuestros invitados podían elegir lo que quisieran y dejar un mensaje. Nos escribieron cosas preciosas, y cada vez que llegaba un regalo, se sentía como una sorpresa llena de cariño.
            </p>
          </ContentBlock>

          <ContentBlock title="Depósitos directos">
            <p>
              Los depósitos llegaban cada dos semanas, directo a nuestra cuenta. Y cuando sumamos todo, nos dimos cuenta de que teníamos el presupuesto completo para nuestro viaje.
            </p>
          </ContentBlock>

          <ContentBlock title="El sueño cumplido">
            <p>
              Pagamos los pasajes, los hoteles y las comidas. Nuestra luna de miel se pagó sola, con amor, con gestos y con el cariño de la gente que más queremos.
            </p>
          </ContentBlock>

          <p>
            Hoy, si alguien me pregunta qué haría distinto, lo tengo clarísimo: no perdería ni un minuto en esas listas del retail.
          </p>
        </ContentSection>

      </div>
      
      <ClosingSection 
        imageSrc={weddingCelebration}
        imageAlt="Camila y Nico celebrando su matrimonio"
        title="🎁 Mi Lista de Novios: La forma más linda de cumplir tus sueños"
        content="Mi Lista de Novios fue mucho más que una forma de recibir regalos. Fue la manera más linda y simple de cumplir un sueño. Sin comisiones escondidas, sin complicaciones, solo amor y apoyo de quienes más queremos."
        authorNote="Camila y Nico - Casados en 2024"
        ctaText="Crea tu lista de regalos personalizada y convierte los gestos de amor en experiencias inolvidables."
      />
    </main>
  );
};

export default Index;
