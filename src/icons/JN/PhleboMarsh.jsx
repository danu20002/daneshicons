import React from 'react';

export const iconData = {
  "id": "PhleboMarsh",
  "name": "PhleboMarsh",
  "category": "JN",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.96 5.52 C 12.60 9.36, 16.84 7.11, 14.28 14.58"
      }
    ],
    [
      "path",
      {
        "d": "M 3.97 3.08 C 4.60 6.84, 6.76 7.25, 18.09 20.09"
      }
    ],
    [
      "path",
      {
        "d": "M 2.21 8.33 C 14.66 15.08, 4.58 13.48, 14.02 19.11"
      }
    ],
    [
      "path",
      {
        "d": "M 7.16 5.26 C 6.60 10.03, 5.12 8.37, 19.12 21.80"
      }
    ],
    [
      "path",
      {
        "d": "M 4.22 5.16 C 17.69 18.41, 13.80 7.95, 15.82 14.24"
      }
    ]
  ]
};

export const PhleboMarsh = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.96 5.52 C 12.60 9.36, 16.84 7.11, 14.28 14.58" />
      <path d="M 3.97 3.08 C 4.60 6.84, 6.76 7.25, 18.09 20.09" />
      <path d="M 2.21 8.33 C 14.66 15.08, 4.58 13.48, 14.02 19.11" />
      <path d="M 7.16 5.26 C 6.60 10.03, 5.12 8.37, 19.12 21.80" />
      <path d="M 4.22 5.16 C 17.69 18.41, 13.80 7.95, 15.82 14.24" />
      {children}
    </svg>
  );
});

export default PhleboMarsh;
