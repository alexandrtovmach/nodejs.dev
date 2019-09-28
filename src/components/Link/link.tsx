import { Link } from 'gatsby';
import React from 'react';

import './link.module.scss';

interface UniversalLinkProps {
  children: JSX.Element[] | JSX.Element | string;
  to?: string;
  className?: string;
  disabled?: boolean;
  title?: string;
};

const UniversalLink = (props: UniversalLinkProps) => {
  const { to, children } = props;

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
    <Link to={to || '/'} {...props}>
      {children}
    </Link>
  );
};

export default UniversalLink;
