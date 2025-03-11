import { articles } from "../data";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const article = articles.find(
    (article) => article.id === parseInt(params.id)
  );
  return Response.json(article);
}

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  const body = await request.json();
  const title = body.title;
  const index = articles.findIndex(
    (article) => article.id === parseInt(params.id)
  );
  articles[index].title = title;
  return Response.json(articles[index]);
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const index = articles.findIndex(
    (article) => article.id === parseInt(params.id)
  );
  const deletedComment = articles[index];
  articles.splice(index, 1);
  return Response.json(deletedComment);
}
