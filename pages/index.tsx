import Head from 'next/head';
import styled from "styled-components";

const YOUTUBE_SEARCH_API = 'https://www.googleapis.com/youtube/v3/search';
const YOUTUBE_VIDEO_API = 'https://www.googleapis.com/youtube/v3/video';
export async function getServerSideProps() {
  let choice = Math.floor(Math.random() * 50) + 1;

  let videoId = Math.random().toString(36).substr(2, 3);
  const res = await fetch(`${YOUTUBE_SEARCH_API}?part=snippet&relatedToVideoID=${videoId}&maxResults=50&key=${process.env.YOUTUBE_API_KEY}`)
  let data = await res.json()
  const nextRes = await fetch(`${YOUTUBE_SEARCH_API}?part=snippet&relatedToVideoID=${videoId}&maxResults=50&pageToken=${data.nextPageToken}&key=${process.env.YOUTUBE_API_KEY}`)
  let nextPage = await nextRes.json()
  
  return {
    props: {
      data,
      choice,
      nextPage
    }
  }
}


export default function Home(props) {
  console.log("data", props.data)
  console.log("nextPage", props.nextPage)

  let video = props.data.items[props.choice];

  console.log("video", video);
  console.log("Next page", props.data.nextPageToken);
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
