import React from 'react';

export const iconData = {
  "id": "VolleyFriday",
  "name": "VolleyFriday",
  "category": "MV",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.25 5.40 L 20.75 5.40 L 20.75 18.60 L 3.25 18.60 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.25 5.40 L 7.51 1.15 L 25.00 1.15 L 20.75 5.40"
      }
    ],
    [
      "path",
      {
        "d": "M 20.75 5.40 L 25.00 1.15 L 25.00 14.34 L 20.75 18.60"
      }
    ]
  ]
};

export const VolleyFriday = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.25 5.40 L 20.75 5.40 L 20.75 18.60 L 3.25 18.60 Z" />
      <path d="M 3.25 5.40 L 7.51 1.15 L 25.00 1.15 L 20.75 5.40" />
      <path d="M 20.75 5.40 L 25.00 1.15 L 25.00 14.34 L 20.75 18.60" />
      {children}
    </svg>
  );
});

export default VolleyFriday;
