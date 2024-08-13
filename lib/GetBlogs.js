export async function fetchBlogs() {
  try {
    const res = await fetch("https://a3ttalsa-001-site4.atempurl.com/public/api/blogs");
    if (!res.ok) {
      throw new Error("Failed to fetch blogs");
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return []; // Return an empty array in case of an error
  }
}