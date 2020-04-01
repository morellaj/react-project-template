/*
Update notes:
- test for rendering when it shouldn't be
- find way to consolidate repeated CSS
- use default props where needed
- use higher order components
- use props spread operator where needed
- remove navbar and footer from components
- combine contact, feedback, etc. and make small format fixes
- fix error message to just ask for refresh or different browser
- get books to pull info without booksbyunit
- work on pdf page section
- enables fully working
- automate the SEO stuff
- create blog section
- create books search section
- check rerendering of the home page
- fix problem with robots.txt
- profiling (probably not necessary)
- work on error handling and pdf page
*/

// Package dependencies
import React, { useEffect, lazy, Suspense } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ReactGA from 'react-ga';


// File dependencies
import { Heading, Button, flexCenter } from 'Styles';
import Navbar from 'Navbar';
import IntroPictures from './IntroPictures';
const Head = lazy(() => import('Head'));
const Details = lazy(() => import('./Details'));
const Footer = lazy(() => import('Footer'));
const TopicsDisplay = lazy(() => import('./TopicsDisplay'));

// Data dependencies
import { HomePage } from 'Data/pageHeadInfo.json';
const { title, description } = HomePage;
import { baseUrl } from 'Constants';

const schema = [
  {
    "@type": ["WebPage"],
    "@id": `${baseUrl}#webpage`,
    "url": baseUrl,
    "name": title,
    "isPartOf": {
      "@id": `${baseUrl}#website`
    },
    "inLanguage": "en-US",
    "about": {
      "@id": `${baseUrl}#organization`
    },
    "description": description
  }
];

// Component
export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <>
      <Suspense fallback={<div />}>
        <Head
          title={title}
          description={description}
          type="website"
          image={`${baseUrl}assets/Home1.jpg`}
          height="1519"
          width="619"
          url={baseUrl}
          schema={schema}
        />
      </Suspense>
      <Navbar />
      <Container>
        <IntroPictures />
        <Suspense fallback={<div />}>
          <Details />
        </Suspense>
        <section>
          <Heading>Current Topics: Ages 4 to 9</Heading>
          <Suspense fallback={<div />}>
            <TopicsDisplay />
          </Suspense>
        </section>
        <TryContainer>
          <BannerContainer>
            <source srcSet="Assets/home-banner.webp" type="image/webp" />
            <source srcSet="Assets/home-banner.jpg" type="image/jpeg" />
            <img
              alt="cartoon scene from an online book"
              src="Assets/home-banner.jpg"
              type="image/jpeg"
              style={{ width: '100%' }}
            />
          </BannerContainer>
          <Button
            as={Link}
            to="/update-sign-up"
            style={{ textDecoration: 'none', zIndex: '100' }}
            onClick={() => ReactGA.event({ category: 'home', action: 'clicked lower read a book' })}
          >
            Email Sign-Up
          </Button>
        </TryContainer>
      </Container>
      <Suspense fallback={<div />}>
        <Footer />
      </Suspense>
    </>
  );
}

// Styling
const Container = styled.main`
  line-height: 1.5;
`;

const TryContainer = styled.div`
  ${flexCenter};
  position: relative;
  margin-top: 50px;
  height: 232px;
  overflow: hidden;
  font-size: 20px;

  @media(max-width: 1000px){
    font-size: 14px;
  }
`;

const BannerContainer = styled.picture`
  position: absolute;
  width: 100%;
  min-width: 820px;
  overflow: hidden;
`;
