import React from 'react';

export const iconData = {
  "id": "PyrrhoQualify",
  "name": "PyrrhoQualify",
  "category": "CJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.30 6.09 L 12.30 6.09"
      }
    ],
    [
      "path",
      {
        "d": "M 18.97 11.75 L 16.97 15.22"
      }
    ],
    [
      "path",
      {
        "d": "M 8.73 18.16 L 6.73 14.70"
      }
    ]
  ]
};

export const PyrrhoQualify = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.30 6.09 L 12.30 6.09" />
      <path d="M 18.97 11.75 L 16.97 15.22" />
      <path d="M 8.73 18.16 L 6.73 14.70" />
      {children}
    </svg>
  );
});

export default PyrrhoQualify;
