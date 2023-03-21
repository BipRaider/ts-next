import React from 'react';
import cn from 'classnames';

import { Search } from '@src/components';

import styles from './SideBar.module.scss';
import { SideBarProps } from './SideBar.props';
import { Menu } from '../Menu';
import Logo from '../logo.svg';

export const SideBar: React.FC<SideBarProps> = ({ children, className, ...props }: SideBarProps): JSX.Element => {
  return (
    <aside className={cn(className, styles.sidebar)} {...props}>
      <Logo className={styles.logo} />
      <Search />
      <Menu />
      {children}
    </aside>
  );
};
