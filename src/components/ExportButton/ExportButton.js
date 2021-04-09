import React from 'react';
import Button from '../Button';
import { copyToClipboard } from '../../utilities/clipboard';
import { encode } from '../../utilities/export';
import { useCheckedIds } from '../../utilities/checklistsContext';

const ExportButton = () => {
  const [exported, setExported] = React.useState(false);
  const { checkedIds } = useCheckedIds();

  const handleExport = () => {
    const exportId = encode(checkedIds.join(','));

    copyToClipboard(`${window.location.origin}/export/${exportId}/`);
    setExported(true);

    setTimeout(() => {
      setExported(false);
    }, 5000);
  };

  return <Button text="Share current progress" feedbackText="Link copied" onClick={handleExport} toggled={exported} />
};

export default ExportButton;
