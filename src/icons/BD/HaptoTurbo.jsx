import React from 'react';

export const iconData = {
  "id": "HaptoTurbo",
  "name": "HaptoTurbo",
  "category": "BD",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.04 5.44 L 20.96 5.44 L 20.96 18.56 L 3.04 18.56 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.04 5.44 L 6.71 1.77 L 24.63 1.77 L 20.96 5.44"
      }
    ],
    [
      "path",
      {
        "d": "M 20.96 5.44 L 24.63 1.77 L 24.63 14.89 L 20.96 18.56"
      }
    ]
  ]
};

export const HaptoTurbo = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.04 5.44 L 20.96 5.44 L 20.96 18.56 L 3.04 18.56 Z" />
      <path d="M 3.04 5.44 L 6.71 1.77 L 24.63 1.77 L 20.96 5.44" />
      <path d="M 20.96 5.44 L 24.63 1.77 L 24.63 14.89 L 20.96 18.56" />
      {children}
    </svg>
  );
});

export default HaptoTurbo;
