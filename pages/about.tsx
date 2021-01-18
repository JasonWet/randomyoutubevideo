import Head from 'next/head';
import Button from '../components/ui/Button'
import styled from "styled-components";
export default function Home() {
  <Head>
      <title>randomYouTube.video</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content="About Random YouTube Video"></meta>
  </Head>
  return (
    <Wrapper>
      <h2>About Us</h2>
    </Wrapper>
  )
}


const Wrapper = styled.div`
  padding: 4em;
`
