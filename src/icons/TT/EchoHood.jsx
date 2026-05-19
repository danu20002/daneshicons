import React from 'react';

export const iconData = {
  "id": "EchoHood",
  "name": "EchoHood",
  "category": "TT",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.43 5.32 C 18.61 16.60, 8.81 18.97, 17.01 18.49"
      }
    ],
    [
      "path",
      {
        "d": "M 9.21 7.99 C 6.48 15.64, 4.14 19.31, 16.97 19.77"
      }
    ],
    [
      "path",
      {
        "d": "M 8.74 9.10 C 5.78 11.47, 13.15 15.76, 21.39 16.21"
      }
    ],
    [
      "path",
      {
        "d": "M 8.38 2.85 C 15.37 18.03, 5.80 18.05, 20.40 15.75"
      }
    ]
  ]
};

export const EchoHood = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.43 5.32 C 18.61 16.60, 8.81 18.97, 17.01 18.49" />
      <path d="M 9.21 7.99 C 6.48 15.64, 4.14 19.31, 16.97 19.77" />
      <path d="M 8.74 9.10 C 5.78 11.47, 13.15 15.76, 21.39 16.21" />
      <path d="M 8.38 2.85 C 15.37 18.03, 5.80 18.05, 20.40 15.75" />
      {children}
    </svg>
  );
});

export default EchoHood;
