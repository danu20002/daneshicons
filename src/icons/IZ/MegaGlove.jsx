import React from 'react';

export const iconData = {
  "id": "MegaGlove",
  "name": "MegaGlove",
  "category": "IZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.87 9.38 Q 16.97 17.55 21.24 13.18"
      }
    ],
    [
      "path",
      {
        "d": "M 17.58 4.95 Q 5.15 14.95 14.64 17.49"
      }
    ],
    [
      "path",
      {
        "d": "M 8.22 16.11 A 5.67 3.67 15 0 1 16.76 11.21"
      }
    ],
    [
      "path",
      {
        "d": "M 6.52 4.01 L 17.59 10.68"
      }
    ]
  ]
};

export const MegaGlove = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.87 9.38 Q 16.97 17.55 21.24 13.18" />
      <path d="M 17.58 4.95 Q 5.15 14.95 14.64 17.49" />
      <path d="M 8.22 16.11 A 5.67 3.67 15 0 1 16.76 11.21" />
      <path d="M 6.52 4.01 L 17.59 10.68" />
      {children}
    </svg>
  );
});

export default MegaGlove;
