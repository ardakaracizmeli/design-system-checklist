export const copyToClipboard = (str) => {
  if (!document.queryCommandSupported('copy')) return;

  const el = document.createElement('textarea');

  el.value = str;
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  document.body.appendChild(el);

  const selection = document.getSelection();
  const selected = selection && selection.rangeCount > 0 ? selection.getRangeAt(0) : false;

  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);

  if (selection && selected) {
    selection.removeAllRanges();
    selection.addRange(selected);
  }
};
