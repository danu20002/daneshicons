import React from 'react';

export const iconData = {
  "id": "UrticeLazy",
  "name": "UrticeLazy",
  "category": "KG",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.44 9.15 C 9.80 5.50, 5.85 13.68, 14.00 18.02"
      }
    ],
    [
      "path",
      {
        "d": "M 3.13 2.79 C 10.33 17.99, 4.99 7.38, 16.20 14.87"
      }
    ],
    [
      "path",
      {
        "d": "M 3.32 2.97 C 15.28 17.39, 8.15 11.06, 21.76 18.12"
      }
    ],
    [
      "path",
      {
        "d": "M 6.85 2.82 C 12.92 16.98, 11.69 14.27, 17.88 21.47"
      }
    ],
    [
      "path",
      {
        "d": "M 5.63 7.37 C 10.92 13.98, 15.60 5.20, 20.65 14.03"
      }
    ]
  ]
};

export const UrticeLazy = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.44 9.15 C 9.80 5.50, 5.85 13.68, 14.00 18.02" />
      <path d="M 3.13 2.79 C 10.33 17.99, 4.99 7.38, 16.20 14.87" />
      <path d="M 3.32 2.97 C 15.28 17.39, 8.15 11.06, 21.76 18.12" />
      <path d="M 6.85 2.82 C 12.92 16.98, 11.69 14.27, 17.88 21.47" />
      <path d="M 5.63 7.37 C 10.92 13.98, 15.60 5.20, 20.65 14.03" />
      {children}
    </svg>
  );
});

export default UrticeLazy;
