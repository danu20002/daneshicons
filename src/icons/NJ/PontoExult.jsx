import React from 'react';

export const iconData = {
  "id": "PontoExult",
  "name": "PontoExult",
  "category": "NJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 17.87 6.56 A 4.53 5.94 11 0 1 5.14 16.78"
      }
    ],
    [
      "path",
      {
        "d": "M 2.25 7.36 Q 19.89 15.35 15.28 10.35"
      }
    ],
    [
      "path",
      {
        "d": "M 21.74 14.48 L 11.38 19.51"
      }
    ],
    [
      "path",
      {
        "d": "M 21.09 21.63 C 7.72 14.09, 13.50 3.24, 4.70 20.44"
      }
    ],
    [
      "path",
      {
        "d": "M 14.15 2.47 A 5.83 2.62 145 0 0 7.10 18.04"
      }
    ]
  ]
};

export const PontoExult = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 17.87 6.56 A 4.53 5.94 11 0 1 5.14 16.78" />
      <path d="M 2.25 7.36 Q 19.89 15.35 15.28 10.35" />
      <path d="M 21.74 14.48 L 11.38 19.51" />
      <path d="M 21.09 21.63 C 7.72 14.09, 13.50 3.24, 4.70 20.44" />
      <path d="M 14.15 2.47 A 5.83 2.62 145 0 0 7.10 18.04" />
      {children}
    </svg>
  );
});

export default PontoExult;
