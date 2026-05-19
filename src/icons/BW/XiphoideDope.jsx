import React from 'react';

export const iconData = {
  "id": "XiphoideDope",
  "name": "XiphoideDope",
  "category": "BW",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.30 5.52 L 20.70 5.52 L 20.70 18.48 L 3.30 18.48 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.30 5.52 L 7.53 1.30 L 24.93 1.30 L 20.70 5.52"
      }
    ],
    [
      "path",
      {
        "d": "M 20.70 5.52 L 24.93 1.30 L 24.93 14.25 L 20.70 18.48"
      }
    ]
  ]
};

export const XiphoideDope = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.30 5.52 L 20.70 5.52 L 20.70 18.48 L 3.30 18.48 Z" />
      <path d="M 3.30 5.52 L 7.53 1.30 L 24.93 1.30 L 20.70 5.52" />
      <path d="M 20.70 5.52 L 24.93 1.30 L 24.93 14.25 L 20.70 18.48" />
      {children}
    </svg>
  );
});

export default XiphoideDope;
