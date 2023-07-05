import React from 'react';

interface IButton {
  children: React.ReactNode;
}

export default function button({ children }: IButton) {
  return <button>{children}</button>;
}
