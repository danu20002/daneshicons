import React from 'react';

export const iconData = {
  "id": "FusioGrave",
  "name": "FusioGrave",
  "category": "GG",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.46 6.52 L 19.54 6.52 L 19.54 17.48 L 4.46 17.48 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.46 6.52 L 7.57 3.41 L 22.65 3.41 L 19.54 6.52"
      }
    ],
    [
      "path",
      {
        "d": "M 19.54 6.52 L 22.65 3.41 L 22.65 14.37 L 19.54 17.48"
      }
    ]
  ]
};

export const FusioGrave = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.46 6.52 L 19.54 6.52 L 19.54 17.48 L 4.46 17.48 Z" />
      <path d="M 4.46 6.52 L 7.57 3.41 L 22.65 3.41 L 19.54 6.52" />
      <path d="M 19.54 6.52 L 22.65 3.41 L 22.65 14.37 L 19.54 17.48" />
      {children}
    </svg>
  );
});

export default FusioGrave;
