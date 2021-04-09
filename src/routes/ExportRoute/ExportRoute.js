import React from 'react';
import { Redirect } from 'react-router-dom';
import { useCheckedIds } from '../../utilities/checklistsContext';
import { decode } from '../../utilities/export';

const ExportRoute = ({ match }) => {
  const { exportId } = match.params;
  const { setCheckedIds } = useCheckedIds();
  const checkedIds = decode(exportId).split(',');

  React.useEffect(() => {
    if (checkedIds.length) setCheckedIds(checkedIds);
  }, [checkedIds, setCheckedIds]);

  return <Redirect to="/" />;
};

export default ExportRoute;
