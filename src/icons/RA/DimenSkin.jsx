import React from 'react';

export const iconData = {
  "id": "DimenSkin",
  "name": "DimenSkin",
  "category": "RA",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.48 18.83 L 19.59 13.20 L 19.22 19.24 L 20.67 19.13"
      }
    ],
    [
      "path",
      {
        "d": "M 12.82 9.06 A 3.80 5.00 79 0 0 4.72 6.66"
      }
    ],
    [
      "path",
      {
        "d": "M 12.52 14.59 C 21.86 8.89, 19.36 8.77, 3.96 16.35"
      }
    ]
  ]
};

export const DimenSkin = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.48 18.83 L 19.59 13.20 L 19.22 19.24 L 20.67 19.13" />
      <path d="M 12.82 9.06 A 3.80 5.00 79 0 0 4.72 6.66" />
      <path d="M 12.52 14.59 C 21.86 8.89, 19.36 8.77, 3.96 16.35" />
      {children}
    </svg>
  );
});

export default DimenSkin;
