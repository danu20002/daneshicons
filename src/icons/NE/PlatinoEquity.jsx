import React from 'react';

export const iconData = {
  "id": "PlatinoEquity",
  "name": "PlatinoEquity",
  "category": "NE",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.68 2.88 C 7.44 10.97, 13.51 19.86, 15.83 16.11"
      }
    ],
    [
      "path",
      {
        "d": "M 5.62 5.82 C 6.43 11.85, 13.91 4.77, 18.61 19.30"
      }
    ],
    [
      "path",
      {
        "d": "M 9.78 4.26 C 14.39 15.03, 6.06 13.12, 17.78 16.63"
      }
    ]
  ]
};

export const PlatinoEquity = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.68 2.88 C 7.44 10.97, 13.51 19.86, 15.83 16.11" />
      <path d="M 5.62 5.82 C 6.43 11.85, 13.91 4.77, 18.61 19.30" />
      <path d="M 9.78 4.26 C 14.39 15.03, 6.06 13.12, 17.78 16.63" />
      {children}
    </svg>
  );
});

export default PlatinoEquity;
