import React from 'react';

export const iconData = {
  "id": "VolieraDino",
  "name": "VolieraDino",
  "category": "TT",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.41 6.84 C 14.37 15.80, 14.48 15.46, 15.98 17.75"
      }
    ],
    [
      "path",
      {
        "d": "M 5.45 6.76 C 9.32 6.48, 19.16 9.47, 17.57 17.99"
      }
    ],
    [
      "path",
      {
        "d": "M 2.23 4.45 C 10.40 10.96, 15.31 5.14, 18.74 17.63"
      }
    ],
    [
      "path",
      {
        "d": "M 8.67 3.67 C 11.08 8.27, 18.65 15.01, 15.13 17.23"
      }
    ],
    [
      "path",
      {
        "d": "M 6.70 8.26 C 10.02 17.47, 14.36 10.08, 19.25 19.85"
      }
    ],
    [
      "path",
      {
        "d": "M 9.87 8.43 C 16.66 15.29, 15.31 19.16, 16.53 16.89"
      }
    ]
  ]
};

export const VolieraDino = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.41 6.84 C 14.37 15.80, 14.48 15.46, 15.98 17.75" />
      <path d="M 5.45 6.76 C 9.32 6.48, 19.16 9.47, 17.57 17.99" />
      <path d="M 2.23 4.45 C 10.40 10.96, 15.31 5.14, 18.74 17.63" />
      <path d="M 8.67 3.67 C 11.08 8.27, 18.65 15.01, 15.13 17.23" />
      <path d="M 6.70 8.26 C 10.02 17.47, 14.36 10.08, 19.25 19.85" />
      <path d="M 9.87 8.43 C 16.66 15.29, 15.31 19.16, 16.53 16.89" />
      {children}
    </svg>
  );
});

export default VolieraDino;
