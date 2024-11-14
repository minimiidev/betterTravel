import type { PortableTextBlock } from "@portabletext/types";
// import type { ImageAsset, Slug } from "@sanity/types";
import groq from "groq";
import { sanityClient } from "sanity:client";

//  BLOG

export async function getAllBlogs(): Promise<Blog[]> {
  return await sanityClient.fetch(
    groq`*[_type == "blog"] | order(_updatedAt desc)
    {
      name,
      "slug": slug.current,
      "imgSrc": image.asset -> url,
    }`
  );
}

export async function getBlog(slug: string): Promise<Blog> {
  return await sanityClient.fetch(
    groq`*[_type == "blog" && slug.current == $slug ][0]
    {
      name,
      "slug": slug.current,
      "imgSrc": image.asset -> url,
      description,
      descriptionMeta
    }`,
    {
      slug,
    }
  );
}

//  PRODUCTOS

export async function getProduct(slug: string): Promise<Product> {
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

export async function getResorts(): Promise<Product[]> {
  return await sanityClient.fetch(
    groq`*[_type == "product" && type == "Resorts"] | order(_updatedAt desc) [0...5]
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
    groq`*[_type == "product" && type == "Resorts"] | order(_updatedAt desc)
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
    groq`*[_type == "product" && type == "Paquetes-Internacionales"] | order(_updatedAt desc) [0...5]
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
    groq`*[_type == "product" && type == "Paquetes-Internacionales"] | order(_updatedAt desc)
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
    groq`*[_type == "product" && type == "Cruceros"] | order(_updatedAt desc) [0...5]
  {
    name,
    type,
    "slug": slug.current,
    "imgSrc": image.asset -> url,
  }`
  );
}

export async function getAllCruises(): Promise<Product[]> {
  return await sanityClient.fetch(
    groq`*[_type == "product" && type == "Cruceros"] | order(_updatedAt desc)
  {
    name,
    type,
    "slug": slug.current,
    "imgSrc": image.asset -> url,
  }`
  );
}

export async function getTours(): Promise<Product[]> {
  return await sanityClient.fetch(
    groq`*[_type == "product" && type == "Excursiones"] | order(_updatedAt desc) [0...5]
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
    groq`*[_type == "product" && type == "Excursiones"] | order(_updatedAt desc)
  {
    name,
    type,
    "slug": slug.current,
    "imgSrc": image.asset -> url,
  }`
  );
}

export interface Product {
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

export interface Blog {
  name: string;
  slug: string;
  imgSrc: string;
  description: PortableTextBlock[];
  descriptionMeta: string;
}
