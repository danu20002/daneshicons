import React from 'react';

export const iconData = {
  "id": "UniSwan",
  "name": "UniSwan",
  "category": "NJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 16.51 7.61 C 21.96 3.23, 17.59 7.72, 10.47 18.23"
      }
    ],
    [
      "path",
      {
        "d": "M 18.54 5.97 L 11.88 4.76"
      }
    ],
    [
      "path",
      {
        "d": "M 10.14 4.46 L 20.45 12.41"
      }
    ],
    [
      "path",
      {
        "d": "M 7.56 5.65 A 5.47 2.46 96 0 0 16.77 19.46"
      }
    ],
    [
      "path",
      {
        "d": "M 2.97 16.15 A 2.57 5.53 76 0 1 9.01 7.37"
      }
    ]
  ]
};

export const UniSwan = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 16.51 7.61 C 21.96 3.23, 17.59 7.72, 10.47 18.23" />
      <path d="M 18.54 5.97 L 11.88 4.76" />
      <path d="M 10.14 4.46 L 20.45 12.41" />
      <path d="M 7.56 5.65 A 5.47 2.46 96 0 0 16.77 19.46" />
      <path d="M 2.97 16.15 A 2.57 5.53 76 0 1 9.01 7.37" />
      {children}
    </svg>
  );
});

export default UniSwan;
