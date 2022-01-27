import React from "react";
import styled from "styled-components";

const Section = styled.section`
  background-color: #f0eff1;
  width: 100%;
  height: 700px;
  padding-bottom: 2rem;

  @media screen and (max-width: 768px) {
    height: 1300px;
  }
`;

const Container = styled.div`
  // padding: calc((100vw - 1300px) / 2);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 800px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ColumnLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  line-height: 1.4;
  padding: 1rem 2rem;
  order: ${({ reverse }) => (reverse ? 1 : 2)};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    @media screen and (max-width: 768px) {
      width: 90%;
      height: 90%;
    }
  }

  @media screen and (max-width: 768px) {
    order: ${({ reverse }) => (reverse ? 2 : 1)};
  }
`;

const ColumnRight = styled.div`
  padding: 1rem 2rem;
  order: ${({ reverse }) => (reverse ? 2 : 1)};
  display: flex;
  justify-content: center;
  align-items: flex-start;

  @media screen and (max-width: 768px) {
    order: ${({ reverse }) => (reverse ? 1 : 2)};
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    @media screen and (max-width: 768px) {
      width: 90%;
      height: 90%;
    }
  }
`;

const Header = styled.h1`
  color: #000000;
  margin-bottom: 1rem;
  font-size: 3rem;
`;

const Paragraph = styled.p`
  color: #000;
  margin-bottom: 2rem;
  font-size: 18px;
  line-height: 1.5;
`;

const About = ({
  heading,
  paragraphOne,
  paragraphTwo,
  reverse,
  image,
}) => {
  return (
    <Section id="about">
      <Container>
        <ColumnLeft>
          <Header>{heading}</Header>
          <Paragraph>{paragraphOne}</Paragraph>
          <Paragraph>{paragraphTwo}</Paragraph>
        </ColumnLeft>
        <ColumnRight reverse={reverse}>
          <img src={image} alt="home" />
        </ColumnRight>
      </Container>
    </Section>
  );
};

export default About;
