import type { PortableTextBlock } from "@portabletext/types";
// import type { ImageAsset, Slug } from "@sanity/types";
import groq from "groq";
import { sanityClient } from "sanity:client";

export async function getResortsAll(): Promise<Destinations[]> {
  return await sanityClient.fetch(
    groq`*[_type == "resort" ]
  {
    name,
    "slug": slug.current ,
    location,
    price,
    currency,
    "imgSrc": image.asset -> url
  }`
  );
}

export async function getResorts(): Promise<Destinations[]> {
  return await sanityClient.fetch(
    groq`*[_type == "resort" ][0...6]  | order(_updatedAt desc)
  {
    _updatedAt,
    name,
    "slug": slug.current ,
    location,
    price,
    currency,
    "imgSrc": image.asset -> url
  }`
  );
}

export async function getResort(slug: string): Promise<Destinations> {
  return await sanityClient.fetch(
    groq`*[_type == "resort" && slug.current == $slug ][0]
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
      checkInTime,
      checkOutTime
    }`,
    {
      slug,
    }
  );
}

export default interface Destinations {
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
}
