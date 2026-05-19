import React from 'react';

export const iconData = {
  "id": "ColoSummit",
  "name": "ColoSummit",
  "category": "ZU",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.23 12.22 L 16.79 16.19 L 11.36 15.90"
      }
    ],
    [
      "path",
      {
        "d": "M 19.78 18.21 A 3.60 2.40 110 0 0 12.47 8.81"
      }
    ]
  ]
};

export const ColoSummit = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.23 12.22 L 16.79 16.19 L 11.36 15.90" />
      <path d="M 19.78 18.21 A 3.60 2.40 110 0 0 12.47 8.81" />
      {children}
    </svg>
  );
});

export default ColoSummit;
