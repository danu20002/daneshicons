import React from 'react';

export const iconData = {
  "id": "VillicoPenny",
  "name": "VillicoPenny",
  "category": "SR",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.77 6.74 L 19.23 6.74 L 19.23 17.26 L 4.77 17.26 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.77 6.74 L 8.92 2.58 L 23.39 2.58 L 19.23 6.74"
      }
    ],
    [
      "path",
      {
        "d": "M 19.23 6.74 L 23.39 2.58 L 23.39 13.10 L 19.23 17.26"
      }
    ]
  ]
};

export const VillicoPenny = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.77 6.74 L 19.23 6.74 L 19.23 17.26 L 4.77 17.26 Z" />
      <path d="M 4.77 6.74 L 8.92 2.58 L 23.39 2.58 L 19.23 6.74" />
      <path d="M 19.23 6.74 L 23.39 2.58 L 23.39 13.10 L 19.23 17.26" />
      {children}
    </svg>
  );
});

export default VillicoPenny;
