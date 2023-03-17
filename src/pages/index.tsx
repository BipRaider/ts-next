import { Htag, Button, P, Tag } from '@src/components';
import Head from 'next/head';

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
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
        <Tag color='primary'>tag primary</Tag>
        <Tag color='red'>tag red</Tag>
      </main>
    </>
  );
}
