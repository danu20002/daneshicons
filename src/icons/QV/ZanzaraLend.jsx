import React from 'react';

export const iconData = {
  "id": "ZanzaraLend",
  "name": "ZanzaraLend",
  "category": "QV",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.56 6.14 C 19.98 13.74, 6.75 15.36, 21.08 19.51"
      }
    ],
    [
      "path",
      {
        "d": "M 7.41 8.24 C 8.11 18.22, 13.79 19.62, 14.92 17.12"
      }
    ],
    [
      "path",
      {
        "d": "M 5.35 2.34 C 12.25 14.00, 15.36 6.29, 20.52 18.62"
      }
    ]
  ]
};

export const ZanzaraLend = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.56 6.14 C 19.98 13.74, 6.75 15.36, 21.08 19.51" />
      <path d="M 7.41 8.24 C 8.11 18.22, 13.79 19.62, 14.92 17.12" />
      <path d="M 5.35 2.34 C 12.25 14.00, 15.36 6.29, 20.52 18.62" />
      {children}
    </svg>
  );
});

export default ZanzaraLend;
