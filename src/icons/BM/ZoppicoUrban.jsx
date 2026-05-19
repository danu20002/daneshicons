import React from 'react';

export const iconData = {
  "id": "ZoppicoUrban",
  "name": "ZoppicoUrban",
  "category": "BM",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.01 7.78 C 15.37 18.21, 8.54 14.27, 15.57 16.38"
      }
    ],
    [
      "path",
      {
        "d": "M 6.02 9.27 C 15.52 18.49, 15.88 7.00, 17.23 21.74"
      }
    ],
    [
      "path",
      {
        "d": "M 8.67 9.81 C 17.91 5.34, 5.52 8.10, 14.14 15.60"
      }
    ]
  ]
};

export const ZoppicoUrban = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.01 7.78 C 15.37 18.21, 8.54 14.27, 15.57 16.38" />
      <path d="M 6.02 9.27 C 15.52 18.49, 15.88 7.00, 17.23 21.74" />
      <path d="M 8.67 9.81 C 17.91 5.34, 5.52 8.10, 14.14 15.60" />
      {children}
    </svg>
  );
});

export default ZoppicoUrban;
