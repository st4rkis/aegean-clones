import { createClient } from "next-sanity";

// 1. Configure the Client
export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2023-05-03",
  useCdn: false, // Important: We want fresh data instantly
});

// 2. The Query to find the Active Numbers
// We fetch ALL contact options and filter them in the component to be safe
export const contactQuery = `*[_type == "contactOptions" && isActive == true] {
  title,
  phoneNumber,
  numberType
}`;
