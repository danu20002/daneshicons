import React from 'react';

export const iconData = {
  "id": "LapisoCable",
  "name": "LapisoCable",
  "category": "GM",
  "nodes": [
    [
      "path",
      {
        "d": "M 15.62 2.23 L 16.88 9.76 L 21.77 15.62 L 14.24 16.88 L 8.38 21.77 L 7.12 14.24 L 2.23 8.38 L 9.76 7.12 Z"
      }
    ]
  ]
};

export const LapisoCable = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 15.62 2.23 L 16.88 9.76 L 21.77 15.62 L 14.24 16.88 L 8.38 21.77 L 7.12 14.24 L 2.23 8.38 L 9.76 7.12 Z" />
      {children}
    </svg>
  );
});

export default LapisoCable;
