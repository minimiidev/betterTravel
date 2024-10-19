import { z } from "astro/zod";
import { defineAction } from "astro:actions";
import { Resend } from "resend";

const API_KEY = import.meta.env.SECRET_RESEND_API_KEY;

export const sendEmail = defineAction({
  accept: "form",
  input: z.object({
    userName: z.string(),
    userNumber: z.number(),
    userEmail: z.string(),
    userComment: z.string().optional(),
    productType: z.string(),
    productName: z.string(),
    checkIn: z.string(),
    checkOut: z.string(),
    adults: z.string(),
    kids: z.string().optional(),
  }),
  handler: async ({
    userName,
    userNumber,
    userEmail,
    userComment,
    adults,
    checkIn,
    checkOut,
    productType,
    productName,
    kids,
  }) => {
    const resend = new Resend(API_KEY);

    if (!userComment) {
      userComment = "";
    }

    const props = {
      userName,
      userNumber,
      userEmail,
      checkIn,
      checkOut,
      adults,
      kids,
      productName,
      productType,
    };

    // const subject = "It works!"
    // const html = `    <h1>De: ${userName}</h1>
    //                  <h3>Telefono: ${userNumber}</h3>
    //                  <h3>Correo Electronico: ${userEmail}</h3>
    //                  <p>${userDesc}</p>
    //                  <small>${userComment}</small> `;

    const body = {
      from: "Better Travel <onboarding@resend.dev>",
      html: "",
      subject: "Reserva",
      to: "javiervitalioperalta@gmail.com",
    };

    const { data, error } = await resend.emails.send(body);
    if (error) {
      return alert(error);
    }

    return data;
  },
});
