import type { PortableTextBlock } from "@portabletext/types";

// export default interface boHotels {
//   name: string;
//   description: string;
//   image: string;
//   start: string;
// }

export default interface Product {
  promotion: boolean;
  type: string;
  name: string;
  slug: string;
  location: string;
  imgSrc: string;
  country: string;
  price: number;
  priceKids: number;
  ageKids: string;
  currency: string;
  checkInDate: string;
  checkoutDate: string;
  checkInTime: string;
  checkOutTime: string;
  days: string;
  nights: string;
  description: PortableTextBlock[];
  requirements: PortableTextBlock[];
}
