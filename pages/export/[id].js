import React from 'react';
import { useRouter } from 'next/router';
import { useCheckedIds } from '../../src/utilities/checklistsContext';
import { decode } from '../../src/utilities/export';

const ExportRoute = () => {
  const { query, push } = useRouter();
  const { id } = query;
  const { setCheckedIds } = useCheckedIds();
  const loadedRef = React.useRef(false);

  React.useEffect(() => {
    if (loadedRef.current || !id) return;
    const checkedIds = decode(id).split(',');

    if (checkedIds && checkedIds.length) setCheckedIds(checkedIds);
    loadedRef.current = true;
    push('/');
  }, [setCheckedIds, id]);

  return null;
};

export default ExportRoute;
