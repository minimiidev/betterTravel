import { z } from "astro/zod";
import { defineAction } from "astro:actions";

export const getReservationDetails = defineAction({
  accept: "form",
  input: z.object({
    checkIn: z.date(),
    checkOut: z.date(),
    adults: z.number(),
    kids: z.number().optional(),
  }),
  handler: async ({checkIn, checkOut, adults, kids}) => {


    if (checkIn === null || checkOut === null) {
        alert("Debe seleccionar la fecha correctamente");
      }
  
      if (checkIn >= checkOut) {
        alert("La fecha de CheckOut no puede ser anterior a la de CheckIn");
      }

      const reservation = `CheckIn: ${checkIn} "/n" CheckOut: ${checkOut} "/n" Adultos: ${adults} "/n" Ninos: ${kids}`;

    return reservation;
  },
});
