import React from 'react';

export const iconData = {
  "id": "ThalamoExpense",
  "name": "ThalamoExpense",
  "category": "YP",
  "nodes": [
    [
      "path",
      {
        "d": "M 16.66 20.61 L 2.21 11.73 L 17.13 3.66 Z"
      }
    ]
  ]
};

export const ThalamoExpense = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...rest}
    >
      <path d="M 16.66 20.61 L 2.21 11.73 L 17.13 3.66 Z" />
      {children}
    </svg>
  );
});

export default ThalamoExpense;
