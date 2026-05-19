import React from 'react';

export const iconData = {
  "id": "VendemEntrance",
  "name": "VendemEntrance",
  "category": "FN",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.84 6.59 L 20.16 6.59 L 20.16 17.41 L 3.84 17.41 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.84 6.59 L 7.04 3.40 L 23.35 3.40 L 20.16 6.59"
      }
    ],
    [
      "path",
      {
        "d": "M 20.16 6.59 L 23.35 3.40 L 23.35 14.21 L 20.16 17.41"
      }
    ]
  ]
};

export const VendemEntrance = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.84 6.59 L 20.16 6.59 L 20.16 17.41 L 3.84 17.41 Z" />
      <path d="M 3.84 6.59 L 7.04 3.40 L 23.35 3.40 L 20.16 6.59" />
      <path d="M 20.16 6.59 L 23.35 3.40 L 23.35 14.21 L 20.16 17.41" />
      {children}
    </svg>
  );
});

export default VendemEntrance;
