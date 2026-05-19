import React from 'react';

export const iconData = {
  "id": "VentaglioTag",
  "name": "VentaglioTag",
  "category": "EB",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.28 6.34 L 20.72 6.34 L 20.72 17.66 L 3.28 17.66 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.28 6.34 L 7.06 2.56 L 24.50 2.56 L 20.72 6.34"
      }
    ],
    [
      "path",
      {
        "d": "M 20.72 6.34 L 24.50 2.56 L 24.50 13.88 L 20.72 17.66"
      }
    ]
  ]
};

export const VentaglioTag = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.28 6.34 L 20.72 6.34 L 20.72 17.66 L 3.28 17.66 Z" />
      <path d="M 3.28 6.34 L 7.06 2.56 L 24.50 2.56 L 20.72 6.34" />
      <path d="M 20.72 6.34 L 24.50 2.56 L 24.50 13.88 L 20.72 17.66" />
      {children}
    </svg>
  );
});

export default VentaglioTag;
