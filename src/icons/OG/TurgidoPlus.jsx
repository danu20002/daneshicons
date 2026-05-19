import React from 'react';

export const iconData = {
  "id": "TurgidoPlus",
  "name": "TurgidoPlus",
  "category": "OG",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.76 12.00 a 8.24 8.24 0 1 0 16.48 0 a 8.24 8.24 0 1 0 -16.48 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.23 9.25 a 7.77 2.3301587945263122 0 1 0 15.53 0 a 7.77 2.3301587945263122 0 1 0 -15.53 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.23 14.75 a 7.77 2.3301587945263122 0 1 0 15.53 0 a 7.77 2.3301587945263122 0 1 0 -15.53 0"
      }
    ],
    [
      "path",
      {
        "d": "M 16.12 4.87 A 2 2 0 0 0 16.12 19.13"
      }
    ],
    [
      "path",
      {
        "d": "M 16.12 4.87 A 2 2 0 0 1 16.12 19.13"
      }
    ],
    [
      "path",
      {
        "d": "M 7.88 4.87 A 2 2 0 0 0 7.88 19.13"
      }
    ],
    [
      "path",
      {
        "d": "M 7.88 4.87 A 2 2 0 0 1 7.88 19.13"
      }
    ]
  ]
};

export const TurgidoPlus = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.76 12.00 a 8.24 8.24 0 1 0 16.48 0 a 8.24 8.24 0 1 0 -16.48 0" />
      <path d="M 4.23 9.25 a 7.77 2.3301587945263122 0 1 0 15.53 0 a 7.77 2.3301587945263122 0 1 0 -15.53 0" />
      <path d="M 4.23 14.75 a 7.77 2.3301587945263122 0 1 0 15.53 0 a 7.77 2.3301587945263122 0 1 0 -15.53 0" />
      <path d="M 16.12 4.87 A 2 2 0 0 0 16.12 19.13" />
      <path d="M 16.12 4.87 A 2 2 0 0 1 16.12 19.13" />
      <path d="M 7.88 4.87 A 2 2 0 0 0 7.88 19.13" />
      <path d="M 7.88 4.87 A 2 2 0 0 1 7.88 19.13" />
      {children}
    </svg>
  );
});

export default TurgidoPlus;
