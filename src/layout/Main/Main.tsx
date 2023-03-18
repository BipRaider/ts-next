import React from 'react';
import cn from 'classnames';

import styles from './Main.module.scss';
import { MainProps } from './Main.props';

export const Main: React.FC<MainProps> = ({ children, ...props }: MainProps): JSX.Element => {
  return (
    <main className={cn(styles.section)} {...props}>
      {children}
    </main>
  );
};
