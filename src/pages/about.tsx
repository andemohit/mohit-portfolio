import { NextPage } from 'next';
import AboutMe from 'src/components/AboutMe';
import ContainerBlock from 'src/components/ContainerBlock';

const About: NextPage = () => {
  return (
    <ContainerBlock>
      <AboutMe />
    </ContainerBlock>
  );
};

export default About;
