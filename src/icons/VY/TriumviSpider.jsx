import React from 'react';

export const iconData = {
  "id": "TriumviSpider",
  "name": "TriumviSpider",
  "category": "VY",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.26 3.75 C 12.11 6.03, 13.62 5.10, 21.26 17.74"
      }
    ],
    [
      "path",
      {
        "d": "M 2.12 4.82 C 8.62 16.09, 6.43 19.26, 17.30 15.38"
      }
    ],
    [
      "path",
      {
        "d": "M 4.29 4.33 C 14.85 13.92, 14.05 11.76, 16.69 16.31"
      }
    ]
  ]
};

export const TriumviSpider = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.26 3.75 C 12.11 6.03, 13.62 5.10, 21.26 17.74" />
      <path d="M 2.12 4.82 C 8.62 16.09, 6.43 19.26, 17.30 15.38" />
      <path d="M 4.29 4.33 C 14.85 13.92, 14.05 11.76, 16.69 16.31" />
      {children}
    </svg>
  );
});

export default TriumviSpider;
