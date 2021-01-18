import Head from 'next/head';
import styled from "styled-components";

const YOUTUBE_VIDEO_API = 'https://www.googleapis.com/youtube/v3/search';

export async function getServerSideProps() {
  const res = await fetch(`${YOUTUBE_VIDEO_API}?kind=puppet&key=${process.env.YOUTUBE_API_KEY}`)
  const data = await res.json();
  return {
    props: {
      data
    }
  }
}


export default function Home({ data }) {
  console.info(data);
  <Head>
      <title>randomYouTube.video</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width"></meta>
      <meta name="description" content="Random YouTube Video"></meta>
  </Head>
  return (
    <Wrapper>
      
    </Wrapper>
  )
}


const Wrapper = styled.div`
  padding: 4em;
`
