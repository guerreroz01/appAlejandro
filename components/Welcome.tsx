import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Preview,
  Section,
  Text,
  Tailwind,
} from "@react-email/components";

import * as React from "react";

interface Props {
  username: string;
  company: string;
}

const WelcomeEmail = ({ username = "Steve", company = "ACME" }: Props) => {
  const previewText = `Bienvenido a ${company}, ${username}!`;

  return (
    <Html>
      <Head />

      <Preview>{previewText}</Preview>

      <Tailwind>
        <Body className="bg-white my-auto mx-auto font-sans">
          <Container className="my-10 mx-auto p-5 w-[465px]">
            <Section className="mt-8">
              <Img
                src="https://www.univia.app/_next/image?url=%2Fimages%2Flogo.png&w=128&q=75"
                width="100"
                height="auto"
                alt="Logo Example"
                className="my-0 mx-auto"
              />
            </Section>

            <Heading className="text-2xl font-normal text-center p-0 my-8 mx-0">
              ¡Bienvenido a <strong>{company}!</strong> Tu futuro comienza ahora
              🔮 {username}!
            </Heading>

            <Text className="text-sm">Hola {username}</Text>

            <Text className="text-sm">
              ¡Felicidades por dar el primer paso hacia tu futuro! 🌟 Estamos
              emocionados de que hayas decidido unirte a{" "}
              <strong>{company}</strong>, la herramienta que cambiará la forma
              en la que ves las oportunidades de carrera.
            </Text>

            <Text className="text-sm">
              Sabemos que tomar decisiones sobre tu futuro profesional puede ser
              desafiante, pero con nuestra inteligencia artificial
              personalizada, tendrás acceso a un proceso único y dinámico que te
              ayudará a descubrir las carreras que mejor se adaptan a tus
              intereses y fortalezas. <strong>¿Lo mejor de todo?</strong> No es
              un test más: nuestras recomendaciones vienen con gráficos
              detallados, porcentajes y un análisis profundo, para que puedas
              tomar decisiones basadas en datos reales, no en suposiciones.
            </Text>

            <Text className="text-sm font-semibold">¿Qué puedes esperar?</Text>

            <Text className="text-sm">
              1. Un recorrido fácil, rápido y sin presión, donde nuestras
              preguntas personalizadas te ayudarán a reflexionar sobre lo que
              realmente te apasiona.
            </Text>
            <Text className="text-sm">
              2.Cuatro opciones de carrera adaptadas a ti, con un análisis claro
              y visual, para que puedas comparar y elegir con confianza.
            </Text>
            <Text className="text-sm">
              3. El primer paso hacia una decisión profesional que podría
              cambiar tu vida.
            </Text>
            <Text className="text-sm font-semibold">Y hay más...</Text>

            <Text className="text-sm">
              Lo mejor de todo, estamos sorteando🤑: <br/>
              🥇150€ primer ganador <br /> 🥈75€ segundo ganador <br /> 🥉25€
              tercer ganador <br />
            </Text>

            <Text className="text-sm">Sólo te llevará minutos participar: <br/>
              1. Realiza al menos dos cuestionarios. <br />
              2. Haz click en "Participar" en la sección dónde pone "Sorteo"
            </Text>

            <Text className="text-sm">
              ¡Participa ahora y asegúrate tu lugar en el sorteo!👏💶
            </Text>

            <Text className="text-sm">
              Este es solo el comienzo.
              <br /> No dejes que el futuro te sorprenda. ¡Hazlo tuyo!
              <br />
              Da el siguiente paso y sigue explorando las increíbles
              oportunidades que tenemos para ti. <br />
            </Text>

            <Text className="text-sm">¡Vamos a hacerlo realidad!</Text>
            <br />
            <Text className="text-sm">
              Un saludo,
              <br />
              <strong>{company}</strong>
            </Text>
            <Text className="text-sm"></Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default WelcomeEmail;
