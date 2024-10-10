import { z } from "astro/zod";
import { defineAction } from "astro:actions";
import { error } from "node_modules/astro/dist/core/logger/core";

export const getReservationDetails = defineAction({
  accept: "form",
  input: z.object({
    checkIn: z.string(),
    checkOut: z.string(),
    adults: z.number(),
    kids: z.number().optional(),
  }),
  handler: async ({checkIn, checkOut, adults, kids}, {cookies}) => {

    try {
      const errors: Record<string, string> = {};
       // Validar fechas
       if (!checkIn || !checkOut) {
        errors.dateMissing = "Debe seleccionar las fechas correctamente.";
      } else if (checkIn >= checkOut) {
        errors.dateOrder = "La fecha de Check-Out no puede ser anterior a la de Check-In.";
      }

      const reservation = {
        checkIn,
        checkOut,
        adults,
        kids: kids || 0,
      };

    // Almacenar la reserva en una cookie
    cookies.set('reservation', JSON.stringify(reservation), {
      // path: '/',
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
