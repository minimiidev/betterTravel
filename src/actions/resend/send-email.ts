import { z } from "astro/zod";
import { defineAction } from "astro:actions";
import { Resend } from 'resend';

export const sendEmail = defineAction({
  accept: "form",
  input: z.object({
    userName: z.string(),
    userNumber: z.number(),
    userEmail: z.string(),
    userDesc: z.string(),
    userComment: z.string().optional(),
  }),
  handler: async ({userDesc, userEmail,userName,userNumber,userComment}) => {
    
    const resend = new Resend(import.meta.env.RESEND_API_KEY)
    
    if(!userComment) {
      userComment = ""
    }
    // const subject = "It works!"
    const html = `    <h1>De: ${userName}</h1>
                     <h3>Telefono: ${userNumber}</h3>
                     <h3>Correo Electronico: ${userEmail}</h3>
                     <p>${userDesc}</p>
                     <small>${userComment}</small> `
    

    const body = {
      from: "Better Travel <onboarding@resend.dev>",
      html: html,
      subject: "Reserva",
      to: "javiervitalioperalta@gmail.com"
    }

    console.log(body)

    const { data, error } = await resend.emails.send(body)
    if (error) {
      return console.error({ error });
    }

    console.log(data)

    return data

  },
});
