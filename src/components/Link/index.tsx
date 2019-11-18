import { Link } from 'gatsby';
import React from 'react';

import styles from './link.module.scss';

interface UniversalLinkProps {
  children: JSX.Element[] | JSX.Element | string;
  to?: string;
  className?: string;
  disabled?: boolean;
  noActiveState?: boolean;
  title?: string;
}

const UniversalLink = (props: UniversalLinkProps): JSX.Element => {
  const { to, children, noActiveState } = props;

  if (to && to.includes('http')) {
    // render absolute link
    return (
      <a href={to} target="_blank" rel="noopener noreferrer" {...props}>
        {children}
      </a>
    );
  }
  // render gatsby optimized link
  return (
    <Link
      to={to || '/'}
      {...props}
      activeClassName={noActiveState ? '' : styles.activeNavigationItem}
    >
      {children}
    </Link>
  );
};

export default UniversalLink;
