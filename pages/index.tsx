import Head from 'next/head';
import Button from '../components/ui/Button'
import styled from "styled-components";
export default function Home() {
  return (
    <Wrapper>
      <TextWrapper>
        <HeaderText>random<Strong>You<Red>Tube</Red></Strong>.video</HeaderText>
      </TextWrapper>
    </Wrapper>
  )
}


const Wrapper = styled.div`
  padding: 4em;
`
const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`
const HeaderText = styled.p`
  font-size: 75x;
  text-align: inline;
`
const Red = styled.span`
  color: red;
`
const Strong = styled.strong`
  font-weight: 1200;
`
const ExtraStrong = styled.strong`
  font-weight: 2200;
`
