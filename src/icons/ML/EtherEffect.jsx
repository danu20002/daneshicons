import React from 'react';

export const iconData = {
  "id": "EtherEffect",
  "name": "EtherEffect",
  "category": "ML",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.13 7.58 C 16.66 14.18, 10.85 13.91, 20.59 15.83"
      }
    ],
    [
      "path",
      {
        "d": "M 6.58 6.33 C 15.94 12.88, 12.54 16.88, 19.38 21.35"
      }
    ],
    [
      "path",
      {
        "d": "M 2.65 9.00 C 18.77 7.26, 9.86 17.79, 16.95 20.95"
      }
    ],
    [
      "path",
      {
        "d": "M 7.03 6.85 C 5.19 14.80, 19.57 17.09, 19.54 21.27"
      }
    ],
    [
      "path",
      {
        "d": "M 9.31 9.36 C 10.70 9.68, 9.96 8.83, 14.67 17.41"
      }
    ]
  ]
};

export const EtherEffect = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.13 7.58 C 16.66 14.18, 10.85 13.91, 20.59 15.83" />
      <path d="M 6.58 6.33 C 15.94 12.88, 12.54 16.88, 19.38 21.35" />
      <path d="M 2.65 9.00 C 18.77 7.26, 9.86 17.79, 16.95 20.95" />
      <path d="M 7.03 6.85 C 5.19 14.80, 19.57 17.09, 19.54 21.27" />
      <path d="M 9.31 9.36 C 10.70 9.68, 9.96 8.83, 14.67 17.41" />
      {children}
    </svg>
  );
});

export default EtherEffect;
