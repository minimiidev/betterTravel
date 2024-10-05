import type { PortableTextBlock } from "@portabletext/types";
import type { ImageAsset, Slug } from "@sanity/types";
import groq from "groq";
import { sanityClient } from "sanity:client";

export const getResorts = async () => {
  const resorts = await sanityClient.fetch(
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
};

export async function getPosts(): Promise<Post[]> {
  return await sanityClient.fetch(
    groq`*[_type == "post" && defined(slug.current)] | order(_createdAt desc)`
  );
}

export async function getPost(slug: string): Promise<Post> {
  return await sanityClient.fetch(
    groq`*[_type == "post" && slug.current == $slug][0]`,
    {
      slug,
    }
  );
}

export default interface Destinations {
  name: string;
  slug: string;
  imgSrc: string;
  location: string;
  country: string;
  price: number;
  currency: string;
  initialDate: string;
  finalDate: string;
  days: string;
  nights: string;
  description: string;
}

export interface Post {
  _type: "post";
  _createdAt: string;
  title?: string;
  slug: Slug;
  excerpt?: string;
  mainImage?: ImageAsset;
  body: PortableTextBlock[];
}
