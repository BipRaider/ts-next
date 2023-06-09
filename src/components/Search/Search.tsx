import cn from 'classnames';
import { useState, KeyboardEvent } from 'react';
import { useRouter } from 'next/router';

import styles from './Search.module.scss';
import { SearchProps } from './Search.props';
import GlassIcon from './glass.svg';

import { Input } from '../Input';
import { Button } from '../Button';

export const Search = ({ className, ...props }: SearchProps): JSX.Element => {
  const [search, setSearch] = useState<string>('');
  const router = useRouter();

  const goToSearch = () => {
    router.push({
      pathname: '/search',
      query: {
        q: search,
      },
    });
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key == 'Enter') {
      goToSearch();
    }
  };

  return (
    <form className={cn(className, styles.search)} {...props} role='search'>
      <Input
        className={styles.input}
        placeholder='Поиск...'
        value={search}
        onChange={e => setSearch(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <Button
        appearance='primary'
        tabIndex={0}
        className={styles.button}
        onClick={goToSearch}
        aria-label='Искать по сайту'
      >
        <GlassIcon />
      </Button>
    </form>
  );
};
