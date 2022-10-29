import { NextPage } from 'next';
import ContainerBlock from 'src/components/ContainerBlock';
import Projects from 'src/components/Projects';

const projects: NextPage = () => {
  return (
    <ContainerBlock title="Projects - Mohit Ande">
      <Projects />
    </ContainerBlock>
  );
};

export default projects;
