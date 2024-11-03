import { createClient, groq } from "next-sanity";

export async function getProjects() {
    const client  = createClient({
        projectId: "mk3jpe3b",
        dataset: "production",
    });

    return client.fetch(groq`*[_type == "project"]{
        _id,
        _createdAt,
        name,
        "slug": slug.current,
        "image": image.asset->url,
        url,
        content
        }`);
}