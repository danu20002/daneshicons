import React from 'react';

export const iconData = {
  "id": "PremaGrain",
  "name": "PremaGrain",
  "category": "NE",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.89 2.23 C 16.15 9.61, 16.08 16.17, 16.69 16.78"
      }
    ],
    [
      "path",
      {
        "d": "M 2.63 8.31 C 8.22 18.20, 11.80 5.09, 18.52 20.18"
      }
    ],
    [
      "path",
      {
        "d": "M 7.48 9.72 C 9.59 13.67, 13.27 18.45, 19.76 21.26"
      }
    ]
  ]
};

export const PremaGrain = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.89 2.23 C 16.15 9.61, 16.08 16.17, 16.69 16.78" />
      <path d="M 2.63 8.31 C 8.22 18.20, 11.80 5.09, 18.52 20.18" />
      <path d="M 7.48 9.72 C 9.59 13.67, 13.27 18.45, 19.76 21.26" />
      {children}
    </svg>
  );
});

export default PremaGrain;
