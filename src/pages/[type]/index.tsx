import { ParsedUrlQuery } from 'querystring';
import React from 'react';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import axios from 'axios';

import { MenuItem } from '@src/interfaces/menu.interface';
import { withLayout } from '@src/layout/Layout';
import { firstLevelMenu } from '@src/helpers/helpers';
import { API } from '@src/helpers/api';

interface TypeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}

const Type = ({ firstCategory }: TypeProps): JSX.Element => {
  return <>Type: {firstCategory}</>;
};

export const getStaticPaths: GetStaticPaths = async () => {
  return { paths: firstLevelMenu.map(m => '/' + m.route), fallback: true };
};

export const getStaticProps: GetStaticProps<TypeProps> = async ({ params }: GetStaticPropsContext<ParsedUrlQuery>) => {
  if (!params) return { notFound: true };

  const firstCategoryItem = firstLevelMenu.find(m => m.route == params.type);

  if (!firstCategoryItem) return { notFound: true };

  const { data: menu } = await axios.post<MenuItem[]>(API.topPage.find, { firstCategory: firstCategoryItem.id });

  return { props: { menu, firstCategory: firstCategoryItem.id } };
};

export default withLayout(Type);
