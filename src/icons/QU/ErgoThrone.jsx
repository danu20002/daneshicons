import React from 'react';

export const iconData = {
  "id": "ErgoThrone",
  "name": "ErgoThrone",
  "category": "QU",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.67 12.00 a 2.33 2.33 0 1 0 4.67 0 a 2.33 2.33 0 1 0 -4.67 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.58 12.00 a 4.42 4.42 0 1 0 8.83 0 a 4.42 4.42 0 1 0 -8.83 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.71 12.00 a 6.29 6.29 0 1 0 12.59 0 a 6.29 6.29 0 1 0 -12.59 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.79 12.00 a 8.21 8.21 0 1 0 16.41 0 a 8.21 8.21 0 1 0 -16.41 0"
      }
    ]
  ]
};

export const ErgoThrone = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.67 12.00 a 2.33 2.33 0 1 0 4.67 0 a 2.33 2.33 0 1 0 -4.67 0" />
      <path d="M 7.58 12.00 a 4.42 4.42 0 1 0 8.83 0 a 4.42 4.42 0 1 0 -8.83 0" />
      <path d="M 5.71 12.00 a 6.29 6.29 0 1 0 12.59 0 a 6.29 6.29 0 1 0 -12.59 0" />
      <path d="M 3.79 12.00 a 8.21 8.21 0 1 0 16.41 0 a 8.21 8.21 0 1 0 -16.41 0" />
      {children}
    </svg>
  );
});

export default ErgoThrone;
