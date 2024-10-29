import type { PortableTextBlock } from "@portabletext/types";
// import type { ImageAsset, Slug } from "@sanity/types";
import groq from "groq";
import { sanityClient } from "sanity:client";

export async function getOffers(): Promise<Product[]> {
  return await sanityClient.fetch(
    groq`*[_type == "product" && promotion == true][0...5] | order(_updatedAt desc)
  {
    name,
    type,
    "slug": slug.current,
    "imgSrc": image.asset -> url,
  }`
  );
}

export async function getAllOffers(): Promise<Product[]> {
  return await sanityClient.fetch(
    groq`*[_type == "product" && promotion == true ] | order(_updatedAt desc)
    {
      name,
      type,
      "slug": slug.current ,
      "imgSrc": image.asset -> url,
    }`
  );
}

export async function getHotels(): Promise<Product[]> {
  return await sanityClient.fetch(
    groq`*[_type == "product" && type == "Hoteles"][0...5]
  {
    name,
    type,
    "slug": slug.current,
    "imgS rc": image.asset -> url,
  }`
  );
}

export async function getAllHotels(): Promise<Product[]> {
  return await sanityClient.fetch(
    groq`*[_type == "product" && type == "Hoteles"]
  {
    name,
    type,
    "slug": slug.current,
    "imgS rc": image.asset -> url,
  }`
  );
}

export async function getTours(): Promise<Product[]> {
  return await sanityClient.fetch(
    groq`*[_type == "product" && type == "Excursiones"][0...5]
  {
    name,
    type,
    "slug": slug.current,
    "imgSrc": image.asset -> url,
  }`
  );
}

export async function getAllTours(): Promise<Product[]> {
  return await sanityClient.fetch(
    groq`*[_type == "product" && type == "Excursiones"]
  {
    name,
    type,
    "slug": slug.current,
    "imgSrc": image.asset -> url,
  }`
  );
}

export async function getResorts(): Promise<Product[]> {
  return await sanityClient.fetch(
    groq`*[_type == "product" && type == "Resorts"][0...5]
  {
    name,
    type,
    "slug": slug.current,
    "imgSrc": image.asset -> url,
  }`
  );
}

export async function getAllResorts(): Promise<Product[]> {
  return await sanityClient.fetch(
    groq`*[_type == "product" && type == "Resorts"]
  {
    name,
    type,
    "slug": slug.current,
    "imgSrc": image.asset -> url,
  }`
  );
}

export async function getCruises(): Promise<Product[]> {
  return await sanityClient.fetch(
    groq`*[_type == "product" && type == "Cruceros"][0...5]
  {
    name,
    type,
    "slug": slug.current,
    "imgSrc": image.asset -> url,
  }`
  );
}

export async function getCruise(slug: string): Promise<Product> {
  return await sanityClient.fetch(
    groq`*[_type == "product" && slug.current == $slug ][0]
    {
      name,
      "slug": slug.current ,
      location,
      price,
      priceKids,
      ageKids,
      currency,
      "imgSrc": image.asset -> url,
      description,
      requirements,
      checkInTime,
      checkOutTime
    }`,
    {
      slug,
    }
  );
}

export async function getAllCruises(): Promise<Product[]> {
  return await sanityClient.fetch(
    groq`*[_type == "product" && type == "Cruceros"]
  {
    name,
    type,
    "slug": slug.current,
    "imgSrc": image.asset -> url,
  }`
  );
}

export async function getPackages(): Promise<Product[]> {
  return await sanityClient.fetch(
    groq`*[_type == "product" && type == "Paquete Internacional"][0...5]
  {
    name,
    type,
    "slug": slug.current,
    "imgSrc": image.asset -> url,
  }`
  );
}

export async function getAllPackages(): Promise<Product[]> {
  return await sanityClient.fetch(
    groq`*[_type == "product" && type == "Paquetes"]
  {
    name,
    type,
    "slug": slug.current,
    "imgSrc": image.asset -> url,
  }`
  );
}

// export async function getResortsAll(): Promise<Destinations[]> {
//   return await sanityClient.fetch(
//     groq`*[_type == "resort" ]
//   {
//     name,
//     "slug": slug.current ,
//     location,
//     price,
//     currency,
//     "imgSrc": image.asset -> url
//   }`
//   );
// }

// export async function getResorts(): Promise<Destinations[]> {
//   return await sanityClient.fetch(
//     groq`*[_type == "resort" ][0...6]  | order(_updatedAt desc)
//   {
//     _updatedAt,
//     name,
//     "slug": slug.current ,
//     location,
//     price,
//     currency,
//     "imgSrc": image.asset -> url
//   }`
//   );
// }

// export async function getResort(slug: string): Promise<Destinations> {
//   return await sanityClient.fetch(
//     groq`*[_type == "resort" && slug.current == $slug ][0]
//     {
//       name,
//       "slug": slug.current ,
//       location,
//       price,
//       priceKids,
//       ageKids,
//       currency,
//       "imgSrc": image.asset -> url,
//       description,
//       checkInTime,
//       checkOutTime
//     }`,
//     {
//       slug,
//     }
//   );
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
  requerements: PortableTextBlock[];
}
