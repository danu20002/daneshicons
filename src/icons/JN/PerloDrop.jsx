import React from 'react';

export const iconData = {
  "id": "PerloDrop",
  "name": "PerloDrop",
  "category": "JN",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.66 2.27 C 18.88 19.99, 7.60 4.39, 14.56 16.09"
      }
    ],
    [
      "path",
      {
        "d": "M 5.34 7.34 C 7.62 19.35, 14.63 14.34, 16.19 20.58"
      }
    ],
    [
      "path",
      {
        "d": "M 9.45 6.21 C 12.89 5.29, 16.80 6.45, 21.21 19.10"
      }
    ],
    [
      "path",
      {
        "d": "M 5.85 8.81 C 7.34 15.32, 10.79 4.88, 17.10 17.28"
      }
    ]
  ]
};

export const PerloDrop = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.66 2.27 C 18.88 19.99, 7.60 4.39, 14.56 16.09" />
      <path d="M 5.34 7.34 C 7.62 19.35, 14.63 14.34, 16.19 20.58" />
      <path d="M 9.45 6.21 C 12.89 5.29, 16.80 6.45, 21.21 19.10" />
      <path d="M 5.85 8.81 C 7.34 15.32, 10.79 4.88, 17.10 17.28" />
      {children}
    </svg>
  );
});

export default PerloDrop;
