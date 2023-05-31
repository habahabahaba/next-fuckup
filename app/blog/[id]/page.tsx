import { Metadata } from 'next';

async function getData(id: string) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    {
      next: {
        revalidate: 60,
      },
    }
  );

  const responseData = await response.json();

  return responseData;
}

type Props = {
  params: {
    id: string;
  };
};

export async function generateMetadata({
  params: { id },
}: Props): Promise<Metadata> {
  const post = await getData(id);

  return { title: post.title };
}

export default async function PostPage({ params: { id } }: Props) {
  const post = await getData(id);

  return (
    <>
      <h3>{`Post ${id}:`}</h3>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </>
  );
}
