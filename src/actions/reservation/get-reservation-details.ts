import { z } from "astro/zod";
import { defineAction } from "astro:actions";

export const getReservationDetails = defineAction({
  accept: "form",
  input: z.object({
    product: z.string(),
    checkIn: z.string(),
    checkOut: z.string(),
    adults: z.number(),
    kids: z.number().optional(),
  }),
  handler: async ({product, checkIn, checkOut, adults, kids}, {cookies}) => {

    try {
     
      const reservation = {
        product,
        checkIn,
        checkOut,
        adults,
        kids: kids || 0,
      };

    // Almacenar la reserva en una cookie
    cookies.set('reservation', JSON.stringify(reservation), {
     path: '/',
      maxAge: 60 * 30 // 30 minutos
    });

    

    return  {
      success: true,
      reservation,
    }
    

    } catch (error) {
      return {
        success: false,
        errors: {
          general: "Error al procesar la reserva.",
        },
      };
    }
  }
});
