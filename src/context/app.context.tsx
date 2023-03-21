import React, { createContext, PropsWithChildren, useState } from 'react';

import { MenuItem } from '@src/interfaces/menu.interface';
import { TopLevelCategory } from '@src/interfaces/page.interface';

export interface IAppContext {
  menu: MenuItem[];
  firstCategory: TopLevelCategory;
  setMenu?: React.Dispatch<React.SetStateAction<MenuItem[]>>;
}

export const AppContext = createContext<IAppContext>({
  menu: [],
  firstCategory: TopLevelCategory.Courses,
});

export const AppContextProvider = ({ menu, firstCategory, children }: PropsWithChildren<IAppContext>): JSX.Element => {
  const [menuState, setMenu] = useState<MenuItem[]>(menu);

  return <AppContext.Provider value={{ menu: menuState, firstCategory, setMenu }}>{children}</AppContext.Provider>;
};
