import React from 'react';

export const iconData = {
  "id": "VinoBounce",
  "name": "VinoBounce",
  "category": "VP",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.37 5.86 L 20.63 5.86 L 20.63 18.14 L 3.37 18.14 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.37 5.86 L 7.87 1.36 L 25.12 1.36 L 20.63 5.86"
      }
    ],
    [
      "path",
      {
        "d": "M 20.63 5.86 L 25.12 1.36 L 25.12 13.65 L 20.63 18.14"
      }
    ]
  ]
};

export const VinoBounce = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.37 5.86 L 20.63 5.86 L 20.63 18.14 L 3.37 18.14 Z" />
      <path d="M 3.37 5.86 L 7.87 1.36 L 25.12 1.36 L 20.63 5.86" />
      <path d="M 20.63 5.86 L 25.12 1.36 L 25.12 13.65 L 20.63 18.14" />
      {children}
    </svg>
  );
});

export default VinoBounce;
