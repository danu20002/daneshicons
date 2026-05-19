import React from 'react';

export const iconData = {
  "id": "ZimoTreat",
  "name": "ZimoTreat",
  "category": "XC",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.59 12.00 a 8.41 8.41 0 1 0 16.82 0 a 8.41 8.41 0 1 0 -16.82 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.52 12.00 a 6.48 6.48 0 1 1 12.96 0 a 6.48 6.48 0 1 1 -12.96 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.91 12.00 L 21.91 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 17.59 17.59 L 19.01 19.01"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 19.91 L 12.00 21.91"
      }
    ],
    [
      "path",
      {
        "d": "M 6.41 17.59 L 4.99 19.01"
      }
    ],
    [
      "path",
      {
        "d": "M 4.09 12.00 L 2.09 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 6.41 6.41 L 4.99 4.99"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 4.09 L 12.00 2.09"
      }
    ],
    [
      "path",
      {
        "d": "M 17.59 6.41 L 19.01 4.99"
      }
    ]
  ]
};

export const ZimoTreat = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.59 12.00 a 8.41 8.41 0 1 0 16.82 0 a 8.41 8.41 0 1 0 -16.82 0" />
      <path d="M 5.52 12.00 a 6.48 6.48 0 1 1 12.96 0 a 6.48 6.48 0 1 1 -12.96 0" />
      <path d="M 19.91 12.00 L 21.91 12.00" />
      <path d="M 17.59 17.59 L 19.01 19.01" />
      <path d="M 12.00 19.91 L 12.00 21.91" />
      <path d="M 6.41 17.59 L 4.99 19.01" />
      <path d="M 4.09 12.00 L 2.09 12.00" />
      <path d="M 6.41 6.41 L 4.99 4.99" />
      <path d="M 12.00 4.09 L 12.00 2.09" />
      <path d="M 17.59 6.41 L 19.01 4.99" />
      {children}
    </svg>
  );
});

export default ZimoTreat;
