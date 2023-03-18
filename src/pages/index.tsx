import { Htag, Button, P, Tag, Rating } from '@src/components';
import { useState } from 'react';
import { Layout } from '@src/layout';

export default function Home(): JSX.Element {
  useState;
  const [rating, setRating] = useState(4);
  return (
    <Layout>
      <Htag tag='h1'>h1</Htag>
      <Htag tag='h2'>h2</Htag>
      <Htag tag='h3'>h3</Htag>

      <Button appearance='primary' arrow='right'>
        primary
      </Button>
      <Button appearance='ghost' arrow='down'>
        ghost
      </Button>
      <P size='s'> small text </P>
      <P size='m'> average text </P>
      <P size='l'> big text </P>
      <Tag color='ghost'>tag ghost</Tag>
      <Tag color='green'>tag green</Tag>
      <Tag color='grey'>tag grey</Tag>
      <Tag color='red'>tag red</Tag>
      <Tag color='primary'>tag primary</Tag>

      <Rating rating={rating} isEditable={true} setRating={setRating} />
    </Layout>
  );
}
