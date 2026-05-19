import React from 'react';

export const iconData = {
  "id": "XericoNew",
  "name": "XericoNew",
  "category": "TF",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.19 17.43 L 17.32 10.46 L 10.81 5.96 L 18.82 5.25 L 5.00 9.94 L 18.04 12.82"
      }
    ],
    [
      "path",
      {
        "d": "M 17.52 7.54 A 3.20 5.98 51 0 1 11.74 14.09"
      }
    ],
    [
      "path",
      {
        "d": "M 14.21 18.04 L 17.67 9.78"
      }
    ],
    [
      "path",
      {
        "d": "M 15.97 13.99 A 5.35 2.44 126 0 0 11.48 4.03"
      }
    ]
  ]
};

export const XericoNew = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.19 17.43 L 17.32 10.46 L 10.81 5.96 L 18.82 5.25 L 5.00 9.94 L 18.04 12.82" />
      <path d="M 17.52 7.54 A 3.20 5.98 51 0 1 11.74 14.09" />
      <path d="M 14.21 18.04 L 17.67 9.78" />
      <path d="M 15.97 13.99 A 5.35 2.44 126 0 0 11.48 4.03" />
      {children}
    </svg>
  );
});

export default XericoNew;
