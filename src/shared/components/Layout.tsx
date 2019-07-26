import React from 'react';
import Header from './Header';

export const Layout: React.FC = ({ children }) => (
  <>
    <Header />
    {children}
  </>
);
