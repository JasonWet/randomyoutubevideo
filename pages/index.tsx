import Head from 'next/head';
import styled from "styled-components";
import ReactPlayer from 'react-player';

const YOUTUBE_SEARCH_API = 'https://www.googleapis.com/youtube/v3/search';
const YOUTUBE_VIDEO_API = 'https://www.googleapis.com/youtube/v3/videos';
export async function getServerSideProps() {
  let choice = Math.floor(Math.random() * 50) + 1;

  // Get List of YouTube Videos
  let videoId = Math.random().toString(36).substr(2, 3);
  const res = await fetch(`${YOUTUBE_SEARCH_API}?part=snippet&relatedToVideoID=${videoId}&maxResults=50&key=${process.env.YOUTUBE_API_KEY}`)
  let data = await res.json()

  return {
    props: {
      data,
      choice
    }
  }
}


export default function Home(props) {
  <Head>
      <title>RYTV</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width"></meta>
      <meta name="description" content="Random YouTube Video"></meta>
  </Head>
  return (
    <Wrapper>
      <ReactPlayer
        url={ `"https://www.youtube.com/watch?v=${props.data.items[props.choice].id.videoId}` }
      />
    </Wrapper>
  )
}


const Wrapper = styled.div`
  padding: 4em;
`
