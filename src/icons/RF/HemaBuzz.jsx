import React from 'react';

export const iconData = {
  "id": "HemaBuzz",
  "name": "HemaBuzz",
  "category": "RF",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.59 6.21 L 20.41 6.21 L 20.41 17.79 L 3.59 17.79 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.59 6.21 L 6.74 3.07 L 23.55 3.07 L 20.41 6.21"
      }
    ],
    [
      "path",
      {
        "d": "M 20.41 6.21 L 23.55 3.07 L 23.55 14.65 L 20.41 17.79"
      }
    ]
  ]
};

export const HemaBuzz = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.59 6.21 L 20.41 6.21 L 20.41 17.79 L 3.59 17.79 Z" />
      <path d="M 3.59 6.21 L 6.74 3.07 L 23.55 3.07 L 20.41 6.21" />
      <path d="M 20.41 6.21 L 23.55 3.07 L 23.55 14.65 L 20.41 17.79" />
      {children}
    </svg>
  );
});

export default HemaBuzz;
