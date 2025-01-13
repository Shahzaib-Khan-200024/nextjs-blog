import { createClient } from "next-sanity";
import imagaUrlBuilder from '@sanity/image-url';

export const client = createClient({
    apiVersion: '2025-05-03', // maybe late change ho
    dataset: 'production',
    projectId: '3a5axy8u',
    useCdn: false,
});

const builder = imagaUrlBuilder(client)

export function urlFor(source: any) {
    return builder.image(source);
}
