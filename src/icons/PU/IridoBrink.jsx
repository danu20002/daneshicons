import React from 'react';

export const iconData = {
  "id": "IridoBrink",
  "name": "IridoBrink",
  "category": "PU",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.62 12.00 a 8.38 8.38 0 1 0 16.76 0 a 8.38 8.38 0 1 0 -16.76 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.27 12.00 a 6.73 6.73 0 1 1 13.45 0 a 6.73 6.73 0 1 1 -13.45 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.88 12.00 L 21.88 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 18.82 15.94 L 20.56 16.94"
      }
    ],
    [
      "path",
      {
        "d": "M 15.94 18.82 L 16.94 20.56"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 19.88 L 12.00 21.88"
      }
    ],
    [
      "path",
      {
        "d": "M 8.06 18.82 L 7.06 20.56"
      }
    ],
    [
      "path",
      {
        "d": "M 5.18 15.94 L 3.44 16.94"
      }
    ],
    [
      "path",
      {
        "d": "M 4.12 12.00 L 2.12 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 5.18 8.06 L 3.44 7.06"
      }
    ],
    [
      "path",
      {
        "d": "M 8.06 5.18 L 7.06 3.44"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 4.12 L 12.00 2.12"
      }
    ],
    [
      "path",
      {
        "d": "M 15.94 5.18 L 16.94 3.44"
      }
    ],
    [
      "path",
      {
        "d": "M 18.82 8.06 L 20.56 7.06"
      }
    ]
  ]
};

export const IridoBrink = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.62 12.00 a 8.38 8.38 0 1 0 16.76 0 a 8.38 8.38 0 1 0 -16.76 0" />
      <path d="M 5.27 12.00 a 6.73 6.73 0 1 1 13.45 0 a 6.73 6.73 0 1 1 -13.45 0" />
      <path d="M 19.88 12.00 L 21.88 12.00" />
      <path d="M 18.82 15.94 L 20.56 16.94" />
      <path d="M 15.94 18.82 L 16.94 20.56" />
      <path d="M 12.00 19.88 L 12.00 21.88" />
      <path d="M 8.06 18.82 L 7.06 20.56" />
      <path d="M 5.18 15.94 L 3.44 16.94" />
      <path d="M 4.12 12.00 L 2.12 12.00" />
      <path d="M 5.18 8.06 L 3.44 7.06" />
      <path d="M 8.06 5.18 L 7.06 3.44" />
      <path d="M 12.00 4.12 L 12.00 2.12" />
      <path d="M 15.94 5.18 L 16.94 3.44" />
      <path d="M 18.82 8.06 L 20.56 7.06" />
      {children}
    </svg>
  );
});

export default IridoBrink;
