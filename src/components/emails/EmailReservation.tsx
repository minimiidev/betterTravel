import {
  Body,
  Button,
  Container,
  Column,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
  Tailwind,
} from "@react-email/components";
import * as React from "react";

interface ReservationEmailProps {
  productName?: string;
  productType?: string;
  userName?: string;
  userNumber?: number;
  userEmail?: string;
  checkInDate?: string;
  checkOutDate?: string;
  checkInTime?: string;
  checkOutTime?: string;
  adults?: number;
  kids?: number;
  productDesc?: string;
  userComment?: string;
}

export const ReservationEmail = ({
  productType,
  productName,
  userName,
  userEmail,
  userNumber,
  userComment,
  checkInDate,
  checkOutDate,
  checkInTime,
  checkOutTime,
  adults,
  kids,
}: ReservationEmailProps) => {
  const previewText = `Join ${userName} on Vercel`;

  return (
    <Html lang="es">
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="flex flex-col items-center justify-center px-2 mx-auto my-auto font-sans text-black bg-white border border-sky-500 ">
          <Container
            align="center"
            className=" mx-auto my-[40px] max-w-[465px] rounded px-10 py-3 flex flex-col items-center justify-center"
          >
            {/* IMAGEN */}
            <Section className="mt-[12px] ">
              <Img
                src={`https://i.postimg.cc/J0J1FKXS/logo-better.jpg`}
                alt="Better Travel Logo"
                className="mx-auto my-0 h-[160px] w-[300px] rounded-xl object-cover"
              />
            </Section>
            <div className="mx-0 my-[12px] h-[2px] w-full bg-orange-500" />
            {/* TITULO */}
            <Heading className="text-center text-black ">
              <Text className="text-[16px] font-medium">Reservación</Text>
              <Text>
                <p className="text-[22px] mb-2 text-sky-500 font-medium">
                  {productType}
                  {": "}
                </p>
                <p className="font-medium text-[28px] text-orange-500">
                  {productName}
                </p>
              </Text>
            </Heading>
            {/* USER INFO */}
            <Section className=" text-[14px] leading-[24px] ">
              <Text>
                Saludos <strong> {userName} </strong> ,
              </Text>
              <Text>
                {userNumber && (
                  <>
                    <strong>Telefono: </strong>
                    <span className="text-blue-600">{userNumber}</span>
                  </>
                )}
              </Text>
              <Text>
                {userEmail && (
                  <>
                    <strong>Correo Electronico: </strong>
                    <Link
                      href={`mailto:${userEmail}`}
                      className="text-blue-600 no-underline"
                    >
                      {userEmail}
                    </Link>
                  </>
                )}
              </Text>
            </Section>
            {/* PRODUCT DESC */}
            <Section className="flex  flex-col items-center justify-center text-center text-[14px] leading-[24px] ">
              <Row
                align="center"
                className="w-32 h-8 mb-3 text-center text-white rounded-full bg-sky-500"
              >
                <Column className="">
                  RD$ <span className="font-bold">9900</span>
                </Column>
              </Row>
              <Row
                align="center"
                className="flex items-center justify-center mb-2 "
              >
                <Column align="center" className=" min-w-[130px] ">
                  De: <span className="font-bold">{checkInDate} </span>
                </Column>
                <Column align="center" className=" min-w-[130px] ">
                  Hasta: <span className="font-bold">{checkOutDate} </span>
                </Column>{" "}
              </Row>
              <Row className="flex items-center justify-center mb-2">
                <Column align="left" className=" pl-2 min-w-[130px]   ">
                  <p>
                    {adults > 1 ? "Adultos: " : "Adulto: "}
                    <span className="font-bold">{adults}</span>
                  </p>
                </Column>
                <Column align="left" className=" min-w-[130px]  ">
                  {kids > 1 ? "Niños:" : "Niño:"}{" "}
                  <span className="font-bold">{kids} </span>
                </Column>{" "}
              </Row>
              <Row className="flex items-center justify-center mb-2 ">
                <Column className=" min-w-[130px] ">
                  CheckIn: <span className="font-bold">{checkInTime} am</span>
                </Column>
                <Column className=" min-w-[130px] ">
                  CheckOut: <span className="font-bold">{checkOutTime} pm</span>
                </Column>{" "}
              </Row>
            </Section>

            <Text className="text-[12px] leading-[24px] text-black/80">
              <h3>Comentario:</h3>
              {userComment}
            </Text>

            {/* BOTON */}
            {/* <Section className="mb-[32px] mt-[32px] text-center">
              <Button
                className="rounded bg-orange-500 px-5 py-3 text-center text-[12px] font-semibold text-white no-underline"
                href={``}
              >
                Ver detalles
              </Button>
            </Section> */}
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

//   ReservationEmail.PreviewProps = {
//     username: "alanturing",
//     userImage: `https://i.postimg.cc/J0J1FKXS/logo-better.jpg`,
//     invitedByUsername: "Alan",
//     userEmail: "alan.turing@example.com",
//     teamName: "Enigma",
//     teamImage: `https://i.postimg.cc/J0J1FKXS/logo-better.jpg`,
//     inviteLink: "https://vercel.com/teams/invite/foo",
//     inviteFromIp: "204.13.186.218",
//     inviteFromLocation: "São Paulo, Brazil",
//   } as ReservationEmailProps;

export default ReservationEmail;
