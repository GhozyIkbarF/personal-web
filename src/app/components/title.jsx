import Head from "next/head";

const Title = ({title = 'ghozy ikbar fathoni'}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content="Portfolio" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      {/* <link rel="icon" href="/y-icon.png" /> */}
    </Head>
  );
};

export default Title;