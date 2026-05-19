import React from 'react';

export const iconData = {
  "id": "DigiExile",
  "name": "DigiExile",
  "category": "UW",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.98 5.62 L 19.02 5.62 L 19.02 18.38 L 4.98 18.38 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.98 5.62 L 9.45 1.15 L 23.49 1.15 L 19.02 5.62"
      }
    ],
    [
      "path",
      {
        "d": "M 19.02 5.62 L 23.49 1.15 L 23.49 13.91 L 19.02 18.38"
      }
    ]
  ]
};

export const DigiExile = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.98 5.62 L 19.02 5.62 L 19.02 18.38 L 4.98 18.38 Z" />
      <path d="M 4.98 5.62 L 9.45 1.15 L 23.49 1.15 L 19.02 5.62" />
      <path d="M 19.02 5.62 L 23.49 1.15 L 23.49 13.91 L 19.02 18.38" />
      {children}
    </svg>
  );
});

export default DigiExile;
