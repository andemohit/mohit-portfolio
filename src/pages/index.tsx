import userData from '@constants/data';
import getLatestRepos from '@services/getLatestRepos';
import type { NextPage } from 'next';
import ContainerBlock from 'src/components/ContainerBlock';
import FavouriteProjects from 'src/components/FavouriteProjects';
import Hero from 'src/components/Hero';
import LatestCode from 'src/components/LatestCode';

export interface IHome {
  repositories: any;
}

const Home: NextPage<IHome> = ({ repositories }) => {
  // const [repos, setRepos] = useState('');
  // useEffect(() => {
  //   setRepos(repositories);
  //   console.log('👍👍', repos.toString(), repositories);
  // }, []);

  return (
    <ContainerBlock>
      <Hero />
      <FavouriteProjects />
      <LatestCode repositories={repositories} />
    </ContainerBlock>
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
