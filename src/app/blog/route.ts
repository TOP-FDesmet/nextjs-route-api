import { articles } from "./data";

export async function GET() {
  return Response.json(articles);
}
