import ky from "ky";

export interface SocialPost {
  id: string;
  message: string;
  image: string;
  permalink_url: string;
  created_time: string;
  source: "facebook" | "instagram";
}

interface FacebookResponse {
  data: Array<{
    id: string;
    message?: string;
    full_picture?: string;
    permalink_url: string;
    created_time: string;
  }>;
}

export async function getLatestPosts(): Promise<SocialPost[]> {
  const PAGE_ID = process.env.FACEBOOK_PAGE_ID;
  const TOKEN = process.env.FACEBOOK_ACCESS_TOKEN;

  if (!PAGE_ID || !TOKEN) {
    console.warn("⚠️ Faltan credenciales de Facebook en .env.local");
    return [];
  }

  try {
    const response = await ky
      .get(`https://graph.facebook.com/v19.0/${PAGE_ID}/posts`, {
        searchParams: {
          fields: "id,message,full_picture,permalink_url,created_time",
          limit: 8,
          access_token: TOKEN,
        },
        next: { revalidate: 3600 },
      })
      .json<FacebookResponse>();

    const posts = response.data
      .filter((post) => post.full_picture)
      .map((post) => ({
        id: post.id,
        message: post.message || "Ver publicación en Facebook...",
        image: post.full_picture!,
        permalink_url: post.permalink_url,
        created_time: new Date(post.created_time).toLocaleDateString("es-MX", {
          day: "numeric",
          month: "short",
        }),
        source: "facebook" as const,
      }))
      .slice(0, 5);

    return posts;
  } catch (error) {
    console.error("Error conectando con Facebook API:", error);
    return [];
  }
}
