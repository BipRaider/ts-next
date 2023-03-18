import React from 'react';
import cn from 'classnames';

import styles from './Layout.module.scss';
import { LayoutProps } from './Layout.props';

import { Header } from './Header';
import { Main, Section, SideBar } from './Main';
import { Footer } from './Footer';

export const Layout: React.FC<LayoutProps> = ({ children }: LayoutProps): JSX.Element => {
  return (
    <>
      <Header>Header</Header>

      <Main>
        <SideBar>SideBar</SideBar>
        <Section>{children}</Section>
      </Main>

      <Footer>Footer</Footer>
    </>
  );
};
