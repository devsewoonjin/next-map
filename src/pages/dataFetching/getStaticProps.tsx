// //https://nextjs.org/doc/pages/building-your-application/data-fetching/get-static-props

import type { InferGetServerSidePropsType, GetStaticProps } from "next";

export default function Page({
  number,
}: InferGetServerSidePropsType<typeof getStaticProps>) {
  return (
    <div>
      <h1>Hello world</h1>
      <h2>number: {number}</h2>
    </div>
  );
}
export const getStaticProps: GetStaticProps<{ number: number }> = async () => {
  const num = await fetch(
    "https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new"
  );
  const number = await num.json();
  return { props: { number } };
};
