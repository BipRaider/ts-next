import React from 'react';
import { GetStaticProps } from 'next';
import axios from 'axios';

import { withLayout } from '@src/layout/Layout';
import { MenuItem } from '@src/interfaces/menu.interface';
import { API } from '@src/helpers/api';

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}
function Search(): JSX.Element {
  return <>Search</>;
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(API.topPage.find, { firstCategory });
  return {
    props: {
      menu,
      firstCategory,
    },
  };
};

export default withLayout(Search);
