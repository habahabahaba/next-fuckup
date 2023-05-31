'use client';

export default function ErrorPage({ error }: { error: Error }) {
  return (
    <>
      <h3>Apologies, Crhyton, apologies...</h3>
      <h1>{error.message}</h1>
    </>
  );
}
