import React from 'react';
import { GetStaticProps } from 'next/types';
import NextError from 'next/error';
import axios from 'axios';

import { Htag } from '@src/components';
import { withLayout } from '@src/layout';
import { MenuItem } from '@src/interfaces/menu.interface';
import { API } from '@src/helpers/api';

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}

const Home: React.FC<HomeProps> = (): JSX.Element => {
  return (
    <>
      <Htag tag='h1'>Home</Htag>
      <NextError statusCode={404} />
    </>
  );
};

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  try {
    const firstCategory = 0;
    const { data } = await axios.post<MenuItem[]>(API.topPage.find, { firstCategory });

    return { props: { menu: data, firstCategory } };
  } catch (error) {
    return { notFound: true };
  }
};

export default withLayout(Home);
