import React from 'react';

export const iconData = {
  "id": "UmbelThorough",
  "name": "UmbelThorough",
  "category": "SR",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.62 6.85 L 20.38 6.85 L 20.38 17.15 L 3.62 17.15 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.62 6.85 L 7.51 2.96 L 24.28 2.96 L 20.38 6.85"
      }
    ],
    [
      "path",
      {
        "d": "M 20.38 6.85 L 24.28 2.96 L 24.28 13.26 L 20.38 17.15"
      }
    ]
  ]
};

export const UmbelThorough = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.62 6.85 L 20.38 6.85 L 20.38 17.15 L 3.62 17.15 Z" />
      <path d="M 3.62 6.85 L 7.51 2.96 L 24.28 2.96 L 20.38 6.85" />
      <path d="M 20.38 6.85 L 24.28 2.96 L 24.28 13.26 L 20.38 17.15" />
      {children}
    </svg>
  );
});

export default UmbelThorough;
