import React from 'react';
import cn from 'classnames';

import styles from './Section.module.scss';
import { SectionProps } from './Section.props';

export const Section: React.FC<SectionProps> = ({ children, ...props }: SectionProps): JSX.Element => {
  return (
    <section className={cn(styles.section)} {...props}>
      {children}
    </section>
  );
};
