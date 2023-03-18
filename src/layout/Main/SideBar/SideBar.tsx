import React from 'react';
import cn from 'classnames';

import styles from './SideBar.module.scss';
import { SideBarProps } from './SideBar.props';

export const SideBar: React.FC<SideBarProps> = ({ children, ...props }: SideBarProps): JSX.Element => {
  return (
    <aside className={cn(styles.section)} {...props}>
      {children}
    </aside>
  );
};
