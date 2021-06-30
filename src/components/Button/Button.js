import React from 'react';
import classnames from 'classnames';
import s from './Button.module.css';

const Button = (props, ref) => {
  const { text, icon, feedbackText, toggled, onClick, href, attributes } = props;
  const rootClassName = classnames(s.root, toggled && s['--toggled']);
  const rootAttributes = { ...attributes };
  const TagName = href ? 'a' : 'button';

  if (!href) {
    rootAttributes.type = 'button';
  }

  return (
    <TagName {...rootAttributes} href={href} className={rootClassName} onClick={onClick} ref={ref}>
      <span className={s.inner}>
        { icon && <span className={s.icon}>{ icon }</span> }
        { text && <span className={s.text}>{ text }</span> }
      </span>
      { feedbackText && <span className={s.feedback}>{ feedbackText }</span> }
    </TagName>
  );
};

export default React.forwardRef(Button);
