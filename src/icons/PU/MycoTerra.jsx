import React from 'react';

export const iconData = {
  "id": "MycoTerra",
  "name": "MycoTerra",
  "category": "PU",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.63 12.00 a 8.37 8.37 0 1 0 16.74 0 a 8.37 8.37 0 1 0 -16.74 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.29 12.00 a 5.71 5.71 0 1 1 11.42 0 a 5.71 5.71 0 1 1 -11.42 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.87 12.00 L 21.87 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 15.94 18.82 L 16.94 20.55"
      }
    ],
    [
      "path",
      {
        "d": "M 8.06 18.82 L 7.06 20.55"
      }
    ],
    [
      "path",
      {
        "d": "M 4.13 12.00 L 2.13 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 8.06 5.18 L 7.06 3.45"
      }
    ],
    [
      "path",
      {
        "d": "M 15.94 5.18 L 16.94 3.45"
      }
    ]
  ]
};

export const MycoTerra = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.63 12.00 a 8.37 8.37 0 1 0 16.74 0 a 8.37 8.37 0 1 0 -16.74 0" />
      <path d="M 6.29 12.00 a 5.71 5.71 0 1 1 11.42 0 a 5.71 5.71 0 1 1 -11.42 0" />
      <path d="M 19.87 12.00 L 21.87 12.00" />
      <path d="M 15.94 18.82 L 16.94 20.55" />
      <path d="M 8.06 18.82 L 7.06 20.55" />
      <path d="M 4.13 12.00 L 2.13 12.00" />
      <path d="M 8.06 5.18 L 7.06 3.45" />
      <path d="M 15.94 5.18 L 16.94 3.45" />
      {children}
    </svg>
  );
});

export default MycoTerra;
