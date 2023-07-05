import React from 'react';
import classnames from 'classnames';

interface IButton {
  children: React.ReactNode;
  className?: string;
}

export default function button({ children, className, ...rest }: IButton) {
  const buttonClasses = classnames(
    'border-2 border-gray-400 rounded-md font-medium text-gray-500 px-10 py-2',
    className
  );

  return <button className={buttonClasses} {...rest}>{children}</button>;
}
