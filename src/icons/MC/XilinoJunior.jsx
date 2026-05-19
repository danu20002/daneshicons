import React from 'react';

export const iconData = {
  "id": "XilinoJunior",
  "name": "XilinoJunior",
  "category": "MC",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.30 5.04 L 19.70 5.04 L 19.70 18.96 L 4.30 18.96 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.30 5.04 L 7.51 1.83 L 22.91 1.83 L 19.70 5.04"
      }
    ],
    [
      "path",
      {
        "d": "M 19.70 5.04 L 22.91 1.83 L 22.91 15.75 L 19.70 18.96"
      }
    ]
  ]
};

export const XilinoJunior = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.30 5.04 L 19.70 5.04 L 19.70 18.96 L 4.30 18.96 Z" />
      <path d="M 4.30 5.04 L 7.51 1.83 L 22.91 1.83 L 19.70 5.04" />
      <path d="M 19.70 5.04 L 22.91 1.83 L 22.91 15.75 L 19.70 18.96" />
      {children}
    </svg>
  );
});

export default XilinoJunior;
