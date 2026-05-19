import React from 'react';

export const iconData = {
  "id": "ValoreWife",
  "name": "ValoreWife",
  "category": "DI",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.41 5.60 L 20.59 5.60 L 20.59 18.40 L 3.41 18.40 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.41 5.60 L 7.85 1.16 L 25.04 1.16 L 20.59 5.60"
      }
    ],
    [
      "path",
      {
        "d": "M 20.59 5.60 L 25.04 1.16 L 25.04 13.95 L 20.59 18.40"
      }
    ]
  ]
};

export const ValoreWife = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.41 5.60 L 20.59 5.60 L 20.59 18.40 L 3.41 18.40 Z" />
      <path d="M 3.41 5.60 L 7.85 1.16 L 25.04 1.16 L 20.59 5.60" />
      <path d="M 20.59 5.60 L 25.04 1.16 L 25.04 13.95 L 20.59 18.40" />
      {children}
    </svg>
  );
});

export default ValoreWife;
