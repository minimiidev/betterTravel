import { z } from "astro/zod";
import { defineAction } from "astro:actions";
import crypto from "crypto";

export const getHotel = defineAction({
  accept: "json",
  input: z.object({
    number: z.number(),
  }),
  handler: async ({ number }) => {
    const hotelCode = number;

    const apiKey = import.meta.env.SECRET_BEDSONLINE_API_KEY;
    const secret = import.meta.env.SECRET_BEDSONLINE_API_SECRET;
    const timestamp = Math.floor(Date.now() / 1000);
    const BEDSONLINE_API_URL = `https://api.test.hotelbeds.com/hotel-content-api/1.0/hotels/${hotelCode}/details?language=CAS`;
    const signature = crypto
      .createHash("sha256")
      .update(apiKey + secret + timestamp)
      .digest("hex");

    try {
      const resp = await fetch(BEDSONLINE_API_URL, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Api-key": apiKey,
          "X-Signature": signature,
        },
      });
      const json = await resp.json();

      const hotel = json.hotel;

      // console.log("🚀 ~ hotels:", hotels);
      // const hotelsName = hotels.name.content;
      // console.log("🚀 ~ hotelsName:", hotelsName);
      // const hotelsDescription = hotels.map(
      // (hotel: any) => hotel.description.content
      // );
      // console.log("🚀 ~ hotelsDescription:", hotelsDescription);
      // const hotelsCountry = hotels.countryCode;
      // console.log("🚀 ~ hotelsCountry:", hotelsCountry);
      // const hotelsStars = hotels.S2C;
      // console.log("🚀 ~ hotelsStarts:", hotelsStars);
      return hotel;
    } catch (error) {
      console.log(error);
      return {
        Status: "error",
        Message: `Something went wrong: ${error}`,
      };
    }
  },
});
