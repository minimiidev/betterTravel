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
  productName = "Royalton",
  productType = "Royalton",
  userName = "Javier Peralta",
  userEmail = "javiervitalioperalta@gmail.com",
  userNumber = 8091114444,
  userComment = "Cuando confirmas?",
  checkInDate = "01-01-2024",
  checkOutDate = "01-01-2024",
  checkInTime = "9:30",
  checkOutTime = "3:30",
  adults = 2,
  kids = 2,
}: ReservationEmailProps) => {
  const previewText = `Join ${userName} on Vercel`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className=" my-auto  mx-auto font-sans  px-2">
          <Container className="bg-[#FDFDFD] border border-sky-500 rounded-md overflow-hidden my-[40px] mx-auto p-[20px] shadow-sm   max-w-[465px] block ">
            {/* IMAGEN */}
            <Section className="mt-[12px]">
              <Img
                src={`https://i.postimg.cc/J0J1FKXS/logo-better.jpg`}
                width="140"
                height="60"
                alt="Vercel"
                className="my-0 mx-auto rounded-xl"
              />
            </Section>
            <Hr className="border border-solid border-orange-500 my-[12px] mx-0 w-full" />
            {/* TITULO */}
            <Heading className=" text-center">
              <Text className="text-[16px] font-medium">Reservación</Text>
              <Text>
                <p className="text-[22px] mb-2 text-sky-500 font-semibold">
                  {" "}
                  {productType}{" "}
                </p>
                <strong className="text-[28px] text-orange-500">
                  {productName}
                </strong>
              </Text>
            </Heading>
            {/* USER INFO */}
            <Section className="px-10 text-black text-[14px] leading-[24px]">
              <Text>
                Hola <strong> {userName} </strong> ,
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
            <Section className="text-black w-full  text-[14px] leading-[24px] flex flex-col items-center justify-center">
              <div className="bg-sky-500 mx-auto mb-3 text-white w-32 py-2">
                <p className="text-center  ">
                  RD$ <span className="font-bold">9900</span>
                </p>
              </div>
              <div className="flex mb-2 items-center justify-center ">
                <Column className=" min-w-[130px] ">
                  De: <span className="font-bold">{checkInDate} </span>
                </Column>
                <Column className=" min-w-[130px] ">
                  Hasta: <span className="font-bold">{checkOutDate} </span>
                </Column>{" "}
              </div>
              <div className="flex items-center mb-2 justify-center">
                <Column className="min-w-[130px]   ">
                  Adultos: <span className="font-bold">{adults}</span>
                </Column>
                <Column className=" min-w-[130px]  ">
                  {kids > 1 ? "Niños:" : "Niño:"}{" "}
                  <span className="font-bold">{kids} </span>
                </Column>{" "}
              </div>
              <div className="flex mb-2 items-center justify-center ">
                <Column className=" min-w-[130px] ">
                  CheckIn: <span className="font-bold">{checkInTime} </span>
                </Column>
                <Column className=" min-w-[130px] ">
                  CheckOut: <span className="font-bold">{checkOutTime} </span>
                </Column>{" "}
              </div>
            </Section>

            <Text className="text-[#666666] text-[12px] leading-[24px]">
              <h3>Comentario:</h3>
              {userComment}
            </Text>

            {/* BOTON */}
            {/* <Section className="text-center mt-[32px] mb-[32px]">
              <Button
                className="bg-orange-500 rounded text-white text-[12px] font-semibold no-underline text-center px-5 py-3"
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
