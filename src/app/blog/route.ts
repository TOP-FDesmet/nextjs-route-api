import { NextRequest } from "next/server";
import { articles } from "./data";

export async function GET(request: NextRequest) {
  const requestParams = request.nextUrl.searchParams;
  const query = requestParams.get("search");
  const filteredArticle = query
    ? articles.filter((article) => article.title.includes(query))
    : articles;

  return Response.json(filteredArticle);
}

export async function POST(request: Request) {
  const article = await request.json();
  const newArticle = {
    id: articles.length + 1,
    title: article.title,
  };
  articles.push(newArticle);
  return new Response(JSON.stringify(newArticle), {
    headers: {
      "Content-Type": "application/json",
    },
    status: 201,
  });
}
