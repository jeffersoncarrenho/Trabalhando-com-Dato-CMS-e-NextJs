import Head from "next/head";

export function SeoBlock(props) {
  return (
    <Head>
      <title>{props.title}</title>
    </Head>
  );
}
