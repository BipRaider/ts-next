import { ParsedUrlQuery } from 'querystring';
import React from 'react';
import Head from 'next/head';
import { GetStaticProps, GetStaticPropsContext, GetStaticPaths } from 'next/types';
import axios from 'axios';

import { withLayout } from '@src/layout';
import { API } from '@src/helpers/api';
import { firstLevelMenu } from '@src/helpers/helpers';
import { MenuItem, TopLevelCategory, TopPageModel, ProductModel } from '@src/interfaces';
import { TopPageComponent } from '@src/page-components';

interface TopPageProps extends Record<string, unknown> {
  firstCategory: TopLevelCategory;
  menu: MenuItem[];
  page: TopPageModel;
  products: ProductModel[];
}

/** Шаблон страниц для рендеринга. */
const Course: React.FC<TopPageProps> = ({ firstCategory, page, products }: TopPageProps): JSX.Element => {
  return (
    <>
      <Head>
        <title>{page.metaTitle}</title>
        <meta name='description' content={page.metaDescription} />
        <meta property='og:title' content={page.metaTitle} />
        <meta property='og:description' content={page.metaDescription} />
        <meta property='og:type' content='article' />
      </Head>
      <TopPageComponent firstCategory={firstCategory} page={page} products={products} />
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  /**  Routers */
  let paths: string[] = [];

  for (const m of firstLevelMenu) {
    const { data } = await axios.post<MenuItem[]>(API.topPage.find, { firstCategory: m.id });

    paths = paths.concat(data.flatMap(items => items?.pages?.map(path => `/${m.route}/${path?.alias}`)));
  }

  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps<TopPageProps> = async ({
  params,
}: GetStaticPropsContext<ParsedUrlQuery>) => {
  if (!params) return { notFound: true };

  const firstCategoryItem = firstLevelMenu.find(m => m.route == params.type);

  if (!firstCategoryItem) return { notFound: true };

  try {
    const { data: menu } = await axios.post<MenuItem[]>(API?.topPage?.find, { firstCategory: firstCategoryItem.id });

    if (menu.length === 0 ?? !params.alias) return { notFound: true };

    const { data: page } = await axios.get<TopPageModel>(`${API?.topPage?.byAlias}${params.alias.toString()}`);
    const { data: products } = await axios.post<ProductModel[]>(API?.product?.find, {
      category: page?.category,
      limit: 10,
    });

    return {
      props: {
        firstCategory: firstCategoryItem.id,
        menu: menu ? menu : [],
        page,
        products: products ? products : [],
      },
    };
  } catch (error) {
    // Return Error page
    return { notFound: true };
  }
};

export default withLayout(Course);
