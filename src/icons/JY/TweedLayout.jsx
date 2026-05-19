import React from 'react';

export const iconData = {
  "id": "TweedLayout",
  "name": "TweedLayout",
  "category": "JY",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.68 12.00 a 7.32 7.32 0 1 0 14.65 0 a 7.32 7.32 0 1 0 -14.65 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.42 12.00 a 4.58 4.58 0 1 1 9.15 0 a 4.58 4.58 0 1 1 -9.15 0"
      }
    ],
    [
      "path",
      {
        "d": "M 18.82 12.00 L 20.82 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 17.23 16.39 L 18.76 17.67"
      }
    ],
    [
      "path",
      {
        "d": "M 13.18 18.72 L 13.53 20.69"
      }
    ],
    [
      "path",
      {
        "d": "M 8.59 17.91 L 7.59 19.64"
      }
    ],
    [
      "path",
      {
        "d": "M 5.59 14.33 L 3.71 15.02"
      }
    ],
    [
      "path",
      {
        "d": "M 5.59 9.67 L 3.71 8.98"
      }
    ],
    [
      "path",
      {
        "d": "M 8.59 6.09 L 7.59 4.36"
      }
    ],
    [
      "path",
      {
        "d": "M 13.18 5.28 L 13.53 3.31"
      }
    ],
    [
      "path",
      {
        "d": "M 17.23 7.61 L 18.76 6.33"
      }
    ]
  ]
};

export const TweedLayout = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.68 12.00 a 7.32 7.32 0 1 0 14.65 0 a 7.32 7.32 0 1 0 -14.65 0" />
      <path d="M 7.42 12.00 a 4.58 4.58 0 1 1 9.15 0 a 4.58 4.58 0 1 1 -9.15 0" />
      <path d="M 18.82 12.00 L 20.82 12.00" />
      <path d="M 17.23 16.39 L 18.76 17.67" />
      <path d="M 13.18 18.72 L 13.53 20.69" />
      <path d="M 8.59 17.91 L 7.59 19.64" />
      <path d="M 5.59 14.33 L 3.71 15.02" />
      <path d="M 5.59 9.67 L 3.71 8.98" />
      <path d="M 8.59 6.09 L 7.59 4.36" />
      <path d="M 13.18 5.28 L 13.53 3.31" />
      <path d="M 17.23 7.61 L 18.76 6.33" />
      {children}
    </svg>
  );
});

export default TweedLayout;
