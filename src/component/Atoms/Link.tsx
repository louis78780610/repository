import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

interface LinkProps {
  to: string;
  children: any;
}

const Link: React.FC<LinkProps> = ({ to, children }) => {
  return (
    <RouterLink to={to}>{children}</RouterLink>
  );
}

export default Link;