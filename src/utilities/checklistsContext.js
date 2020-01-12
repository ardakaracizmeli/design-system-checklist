import React from 'react';

const ChecklistsContext = React.createContext({});

export const ChecklistsProvider = (props) => {
  const { children } = props;
  const [checkedIds, setCheckedIds] = React.useState([]);

  const load = () => {
    const data = localStorage.getItem('checked');

    if (!data) return;
    return data.split(',');
  };

  const save = (data) => {
    setCheckedIds(data);
    localStorage.setItem('checked', data.join(','));
  };

  const add = (id) => {
    save([...checkedIds, id]);
  };

  const set = (ids) => {
    save(ids);
  };

  const remove = (id) => {
    const nextIds = checkedIds.filter(checkedId => checkedId !== id);
    save(nextIds);
  };

  React.useEffect(() => {
    const lsCheckedIds = load();

    if (!lsCheckedIds) return;
    setCheckedIds(lsCheckedIds);
  }, []);

  return (
    <ChecklistsContext.Provider value={{ add, remove, set, checkedIds }}>
      { children }
    </ChecklistsContext.Provider>
  );
};

export const useCheckItem = (id) => {
  const { add, remove, checkedIds } = React.useContext(ChecklistsContext);

  return {
    add,
    remove,
    checked: checkedIds.includes(id),
  };
};

export const useCheckedIds = () => {
  const { checkedIds, set } = React.useContext(ChecklistsContext);
  return { checkedIds, setCheckedIds: set };
};
