import React from 'react';
import cn from 'classnames';

import styles from './Header.module.scss';
import { HeaderProps } from './Header.props';

export const Header: React.FC<HeaderProps> = ({ children, ...props }: HeaderProps): JSX.Element => {
  return (
    <header className={cn(styles.section)} {...props}>
      {children}
    </header>
  );
};
