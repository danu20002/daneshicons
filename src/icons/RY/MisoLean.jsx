import React from 'react';

export const iconData = {
  "id": "MisoLean",
  "name": "MisoLean",
  "category": "RY",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.49 5.04 L 20.51 5.04 L 20.51 18.96 L 3.49 18.96 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.49 5.04 L 6.83 1.69 L 23.86 1.69 L 20.51 5.04"
      }
    ],
    [
      "path",
      {
        "d": "M 20.51 5.04 L 23.86 1.69 L 23.86 15.62 L 20.51 18.96"
      }
    ]
  ]
};

export const MisoLean = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.49 5.04 L 20.51 5.04 L 20.51 18.96 L 3.49 18.96 Z" />
      <path d="M 3.49 5.04 L 6.83 1.69 L 23.86 1.69 L 20.51 5.04" />
      <path d="M 20.51 5.04 L 23.86 1.69 L 23.86 15.62 L 20.51 18.96" />
      {children}
    </svg>
  );
});

export default MisoLean;
