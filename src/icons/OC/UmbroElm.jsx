import React from 'react';

export const iconData = {
  "id": "UmbroElm",
  "name": "UmbroElm",
  "category": "OC",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.11 16.93 A 3.98 4.88 59 0 1 16.63 19.76"
      }
    ],
    [
      "path",
      {
        "d": "M 10.14 18.38 L 4.60 7.59 L 5.28 20.84 L 19.11 20.16 L 12.54 4.82"
      }
    ],
    [
      "path",
      {
        "d": "M 20.34 17.34 C 8.12 2.23, 14.73 6.14, 21.21 13.51"
      }
    ],
    [
      "path",
      {
        "d": "M 14.98 10.50 Q 13.10 2.23 2.36 20.51"
      }
    ],
    [
      "path",
      {
        "d": "M 18.45 19.17 Q 10.29 7.75 19.88 18.32"
      }
    ],
    [
      "path",
      {
        "d": "M 6.55 13.85 L 10.80 19.47"
      }
    ]
  ]
};

export const UmbroElm = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.11 16.93 A 3.98 4.88 59 0 1 16.63 19.76" />
      <path d="M 10.14 18.38 L 4.60 7.59 L 5.28 20.84 L 19.11 20.16 L 12.54 4.82" />
      <path d="M 20.34 17.34 C 8.12 2.23, 14.73 6.14, 21.21 13.51" />
      <path d="M 14.98 10.50 Q 13.10 2.23 2.36 20.51" />
      <path d="M 18.45 19.17 Q 10.29 7.75 19.88 18.32" />
      <path d="M 6.55 13.85 L 10.80 19.47" />
      {children}
    </svg>
  );
});

export default UmbroElm;
