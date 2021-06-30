import React from "react";
import Button from "../Button";
import { copyToClipboard } from "../../utilities/clipboard";
import { encode } from "../../utilities/export";
import { useCheckedIds } from "../../utilities/checklistsContext";

const ExportButton = ({ text, feedbackText }) => {
  const [exported, setExported] = React.useState(false);
  const { checkedIds } = useCheckedIds();

  const handleExport = () => {
    const exportId = encode(checkedIds.join(","));
    const baseUrl = `${window.location.origin}/export`;
    const exportUrl = exportId ? `${baseUrl}/${exportId}` : baseUrl;

    copyToClipboard(exportUrl);
    setExported(true);

    setTimeout(() => {
      setExported(false);
    }, 5000);
  };

  return (
    <Button
      text={text}
      feedbackText={feedbackText}
      onClick={handleExport}
      toggled={exported}
    />
  );
};

export default ExportButton;
