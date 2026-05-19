import React from 'react';

export const iconData = {
  "id": "TermoMark",
  "name": "TermoMark",
  "category": "EQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.14 12.00 L 15.86 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 8.14 12.00 L 11.24 10.14"
      }
    ],
    [
      "path",
      {
        "d": "M 8.14 12.00 L 11.24 13.86"
      }
    ]
  ]
};

export const TermoMark = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.14 12.00 L 15.86 12.00" />
      <path d="M 8.14 12.00 L 11.24 10.14" />
      <path d="M 8.14 12.00 L 11.24 13.86" />
      {children}
    </svg>
  );
});

export default TermoMark;
