import React from 'react';

export const iconData = {
  "id": "ValgoLavender",
  "name": "ValgoLavender",
  "category": "KZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.20 8.64 C 6.11 8.10, 5.98 8.84, 20.19 16.01"
      }
    ],
    [
      "path",
      {
        "d": "M 7.68 4.31 C 9.84 14.65, 18.15 7.94, 19.79 15.31"
      }
    ],
    [
      "path",
      {
        "d": "M 2.19 2.99 C 11.76 6.03, 18.45 18.97, 18.77 19.67"
      }
    ],
    [
      "path",
      {
        "d": "M 2.68 8.45 C 15.26 13.28, 7.97 6.04, 14.36 18.06"
      }
    ],
    [
      "path",
      {
        "d": "M 9.07 7.65 C 19.98 18.17, 13.72 18.26, 19.75 17.15"
      }
    ]
  ]
};

export const ValgoLavender = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.20 8.64 C 6.11 8.10, 5.98 8.84, 20.19 16.01" />
      <path d="M 7.68 4.31 C 9.84 14.65, 18.15 7.94, 19.79 15.31" />
      <path d="M 2.19 2.99 C 11.76 6.03, 18.45 18.97, 18.77 19.67" />
      <path d="M 2.68 8.45 C 15.26 13.28, 7.97 6.04, 14.36 18.06" />
      <path d="M 9.07 7.65 C 19.98 18.17, 13.72 18.26, 19.75 17.15" />
      {children}
    </svg>
  );
});

export default ValgoLavender;
