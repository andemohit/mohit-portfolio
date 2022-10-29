import { NextPage } from 'next';
import Contact from 'src/components/Contact';
import ContainerBlock from 'src/components/ContainerBlock';

const contact: NextPage = () => {
  return (
    <ContainerBlock title="Contact - Mohit Ande">
      <Contact />
    </ContainerBlock>
  );
};

export default contact;
