// import { sendEmail } from "./resend/send-email";
import { checkStatus } from "./bedsonline/check-status.json";
import { getAllHotels } from "./bedsonline/get-all-hotels.json";
import { getHotel } from "./bedsonline/get-hotel.json";
import { saveHotelCode } from "./bedsonline/save-hotel-code";
import { getReservationDetails } from "./reservation/get-reservation-details";

export const server = {
  // sendEmail,
  getReservationDetails,

  // BEDSONLINE
  checkStatus,
  getAllHotels,
  getHotel,
  saveHotelCode,
};
