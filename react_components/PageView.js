'use strict';

import React from 'react';

const PageView = (props) => {
  const cssClassName = props.pageClassName;
  let linkClassName = props.pageLinkClassName;
  const onClick = props.onClick;
  const href = props.href;
  let ariaLabel = 'Page ' + props.page +
    (props.extraAriaContext ? ' ' + props.extraAriaContext : '');
  let ariaCurrent = null;

  if (props.selected) {
    ariaCurrent = 'page';
    ariaLabel = 'Page ' + props.page + ' is your current page';
    if (typeof(linkClassName) !== 'undefined') {
      linkClassName = linkClassName + ' ' + props.activeClassName;
    } else {
      linkClassName = props.activeClassName;
    }
  }

  return (
      <li className={cssClassName}>
          <a onClick={onClick}
             role="button"
             className={linkClassName}
             href={href}
             tabIndex="0"
             aria-label={ariaLabel}
             aria-current={ariaCurrent}
             onKeyPress={onClick}>
            {props.page}
          </a>
      </li>
  )
}

export default PageView;
