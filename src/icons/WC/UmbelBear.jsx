import React from 'react';

export const iconData = {
  "id": "UmbelBear",
  "name": "UmbelBear",
  "category": "WC",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.40 6.81 L 12.40 6.81"
      }
    ],
    [
      "path",
      {
        "d": "M 18.30 11.47 L 16.30 14.94"
      }
    ],
    [
      "path",
      {
        "d": "M 9.31 17.72 L 7.31 14.25"
      }
    ]
  ]
};

export const UmbelBear = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.40 6.81 L 12.40 6.81" />
      <path d="M 18.30 11.47 L 16.30 14.94" />
      <path d="M 9.31 17.72 L 7.31 14.25" />
      {children}
    </svg>
  );
});

export default UmbelBear;
