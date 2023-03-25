import React, { FunctionComponent, useState, KeyboardEvent, useRef } from 'react';
import cn from 'classnames';

import { AppContextProvider, IAppContext } from '@src/context/app.context';

import styles from './Layout.module.scss';
import { LayoutProps } from './Layout.props';

import { Header } from './Header';
import { SideBar } from './SideBar';
import { Main } from './Main';
import { Footer } from './Footer';
import { Up } from '@src/components';

/*** Main page to view. */
const Layout: React.FC<LayoutProps> = ({ children }: LayoutProps): JSX.Element => {
  const [isSkipLinkDisplayed, setIsSkipLinkDisplayed] = useState<boolean>(false);
  const bodyRef = useRef<HTMLDivElement>(null);

  const skipContentAction = (key: KeyboardEvent) => {
    if (key.code == 'Space' || key.code == 'Enter') {
      key.preventDefault();
      bodyRef.current?.focus();
    }
    setIsSkipLinkDisplayed(false);
  };

  return (
    <div className={styles.wrapper}>
      <a
        onFocus={() => setIsSkipLinkDisplayed(true)}
        tabIndex={0}
        className={cn(styles.skipLink, {
          [styles.displayed]: isSkipLinkDisplayed,
        })}
        onKeyDown={skipContentAction}
      >
        Сразу к содержанию
      </a>
      <Header className={styles.header}>
        <SideBar />
      </Header>
      <SideBar className={styles.sidebar} />
      <Main className={styles.main}>{children}</Main>
      <Footer className={styles.footer} />
      <Up />
    </div>
  );
};

/*** Wrapper for all components.*/
export const withLayout = <T extends Record<string, unknown> & IAppContext>(Component: FunctionComponent<T>) => {
  return function withLayoutComponent(props: T): JSX.Element {
    return (
      <AppContextProvider menu={props.menu} firstCategory={props.firstCategory}>
        <Layout>
          <Component {...props} />
        </Layout>
      </AppContextProvider>
    );
  };
};
