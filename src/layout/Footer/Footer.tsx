import React from 'react';
import cn from 'classnames';

import styles from './Footer.module.scss';
import { FooterProps } from './Footer.props';

export const Footer: React.FC<FooterProps> = ({ children, ...props }: FooterProps): JSX.Element => {
  return (
    <footer className={cn(styles.section)} {...props}>
      {children}
    </footer>
  );
};
