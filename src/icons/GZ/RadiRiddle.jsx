import React from 'react';

export const iconData = {
  "id": "RadiRiddle",
  "name": "RadiRiddle",
  "category": "GZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.21 5.96 L 19.79 5.96 L 19.79 18.04 L 4.21 18.04 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.21 5.96 L 8.10 2.07 L 23.67 2.07 L 19.79 5.96"
      }
    ],
    [
      "path",
      {
        "d": "M 19.79 5.96 L 23.67 2.07 L 23.67 14.16 L 19.79 18.04"
      }
    ]
  ]
};

export const RadiRiddle = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.21 5.96 L 19.79 5.96 L 19.79 18.04 L 4.21 18.04 Z" />
      <path d="M 4.21 5.96 L 8.10 2.07 L 23.67 2.07 L 19.79 5.96" />
      <path d="M 19.79 5.96 L 23.67 2.07 L 23.67 14.16 L 19.79 18.04" />
      {children}
    </svg>
  );
});

export default RadiRiddle;
