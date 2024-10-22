import { z } from "astro/zod";
import { defineAction } from "astro:actions";

export const getReservationDetails = defineAction({
  accept: "form",
  input: z.object({
    productType: z.string(),
    productName: z.string(),
    checkInDate: z.string(),
    checkOutDate: z.string(),
    checkInTime: z.string(),
    checkOutTime: z.string(),
    adults: z.string(),
    kids: z.string().optional(),
    price: z.string(),
    currency: z.string(),
    productUrl: z.string(),
  }),
  handler: async (
    {
      productType,
      productName,
      checkInDate,
      checkOutDate,
      checkInTime,
      checkOutTime,
      adults,
      kids,
      price,
      currency,
      productUrl,
    },
    { cookies }
  ) => {
    try {
      const reservation = {
        productType,
        productName,
        checkInDate,
        checkOutDate,
        checkInTime,
        checkOutTime,
        adults,
        kids: kids || 0,
        price,
        currency,
        productUrl,
      };

      // Almacenar la reserva en una cookie
      cookies.set("reservation", JSON.stringify(reservation), {
        path: "/",
        maxAge: 60 * 30, // 30 minutos
      });

      return {
        success: true,
        reservation,
      };
    } catch (error) {
      return {
        success: false,
        errors: {
          general: "Error al procesar la reserva.",
        },
      };
    }
  },
});
