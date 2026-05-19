import React from 'react';

export const iconData = {
  "id": "ZoologiaKebab",
  "name": "ZoologiaKebab",
  "category": "MZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.00 20.09 L 4.87 16.31 L 3.91 10.00 L 7.69 4.87 L 14.00 3.91 L 19.13 7.69 L 20.09 14.00 L 16.31 19.13 Z"
      }
    ]
  ]
};

export const ZoologiaKebab = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.00 20.09 L 4.87 16.31 L 3.91 10.00 L 7.69 4.87 L 14.00 3.91 L 19.13 7.69 L 20.09 14.00 L 16.31 19.13 Z" />
      {children}
    </svg>
  );
});

export default ZoologiaKebab;
