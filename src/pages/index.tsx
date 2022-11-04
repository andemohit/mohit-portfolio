import userData from '@constants/data';
import getLatestRepos from '@services/getLatestRepos';
import type { NextPage } from 'next';
import Script from 'next/script';
import ContainerBlock from 'src/components/ContainerBlock';
import FavouriteProjects from 'src/components/FavouriteProjects';
import Hero from 'src/components/Hero';
import LatestCode from 'src/components/LatestCode';

export interface IHome {
  repositories: any;
}

const Home: NextPage<IHome> = ({ repositories }) => {
  return (
    <>
      <Script
        id="googleAnalytics"
        async
        src="https://www.googletagmanager.com/gtag/js?id=UA-131217523-1"
        strategy="lazyOnload"
      >
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'UA-131217523-1');
        `}
      </Script>
      <ContainerBlock>
        <Hero />
        <FavouriteProjects />
        <LatestCode repositories={repositories} />
      </ContainerBlock>
    </>
  );
};

export default Home;

export const getServerSideProps = async () => {
  let token = process.env.GITHUB_AUTH_TOKEN;
  const repositories = await getLatestRepos(userData, token);
  return {
    props: {
      repositories,
    },
  };
};
