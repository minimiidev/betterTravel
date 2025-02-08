import { z } from "astro/zod";
import { defineAction } from "astro:actions";
import crypto from "crypto";

export const checkStatus = defineAction({
  accept: "json",
  input: z.string(),
  handler: async () => {
    const apiKey = import.meta.env.SECRET_BEDSONLINE_API_KEY;
    const secret = import.meta.env.SECRET_BEDSONLINE_API_SECRET;
    const timestamp = Math.floor(Date.now() / 1000);
    const BEDSONLINE_API_URL =
      "https://api.test.hotelbeds.com/hotel-api/1.0/status";
    const signature = crypto
      .createHash("sha256")
      .update(apiKey + secret + timestamp)
      .digest("hex");

    //   try {
    //     const resp = await fetch(BEDSONLINE_API_URL, {
    //       method: "GET",
    //       headers: {
    //         Accept: "application/json",
    //         "Api-key": apiKey,
    //         "X-Signature": signature,
    //       },
    //     });
    //     const data = await resp.json();
    //     return {
    //       body: JSON.stringify(data),
    //     };
    //   } catch (error) {
    //     console.log(error);
    //   }
    //   return {
    //     Status: "error",
    //     Message: "Something went wrong",
    //   };
  },
});
