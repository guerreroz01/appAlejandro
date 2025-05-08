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

const EmailConfSorteo = ({ username, company }: Props) => {
  const previewText = `¡Estás dentro! Tu participación en el sorteo está confirmada 🎉 ${username}!`;

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
              ¡Estás dentro! Tu participación en el sorteo está confirmada! 🎉
            </Heading>

            <Text className="text-sm">Felicidades {username}</Text>

            <Text className="text-sm">
              ¡Gracias por unirte a <strong>{company}!</strong> Nos alegra mucho saber que estás participando en nuestro sorteo. 🎁
            </Text>

            <Text className="text-sm">
              Tu participación está confirmada y tienes la oportunidad de ganar uno de los increíbles premios que tenemos para ti:
            </Text>
            <Text className="text-sm">
              Lo mejor de todo, estamos sorteando🤑: <br />
              🥇150€ primer ganador <br /> 🥈75€ segundo ganador <br /> 🥉25€
              tercer ganador <br />
            </Text>

            <Text className="text-sm font-semibold">¿Cuándo sabremos los ganadores?</Text>

            <Text className="text-sm">
              Los afortunados ganadores serán anunciados el 6 de octubre a las 19:00 PM. Estaremos informándote por correo con todos los detalles sobre cómo haremos el anuncio de los ganadores del sorteo, así que estate atento a tu bandeja de entrada.
            </Text>
            <Text className="text-sm">
              Tranquilo, estás en buenas manos. <br/>
              En <strong>{company}!</strong>, nos aseguramos de que todo el proceso sea transparente y fácil de seguir. Además, nos aseguraremos de que estés informado en cada paso, ¡para que no te pierdas ni un solo detalle!😊
            </Text>
            <Text className="text-sm">

              Gracias nuevamente por confiar en nosotros. ¡Nos entusiasma mucho compartir este camino contigo y queremos que disfrutes cada paso del proceso!
            </Text>

            <Text className="text-sm">
              ¡Muchísima suerte! 🍀
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

export default EmailConfSorteo;
