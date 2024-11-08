import { z } from "astro/zod";
import { defineAction } from "astro:actions";
import hotel from "schema/hotel";

export const saveHotelCode = defineAction({
  accept: "json",
  input: z.object({ hotelCode: z.number() }),
  handler: async ({ hotelCode }, { cookies }) => {
    try {
      const code = hotelCode;
      // Almacenar la reserva en una cookie
      cookies.set("hotelCode", JSON.stringify(code), {
        path: "/",
        maxAge: 60 * 30, // 30 minutos
      });

      return {
        success: true,
      };
    } catch (error) {
      return {
        success: false,
        errors: {
          general: "Error al guardar HOTELCODE",
        },
      };
    }
  },
});
