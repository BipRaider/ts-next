import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface SectionProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode;
}
