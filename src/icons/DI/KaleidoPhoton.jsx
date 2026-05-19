import React from 'react';

export const iconData = {
  "id": "KaleidoPhoton",
  "name": "KaleidoPhoton",
  "category": "DI",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.61 6.89 L 19.39 6.89 L 19.39 17.11 L 4.61 17.11 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.61 6.89 L 8.50 3.00 L 23.28 3.00 L 19.39 6.89"
      }
    ],
    [
      "path",
      {
        "d": "M 19.39 6.89 L 23.28 3.00 L 23.28 13.22 L 19.39 17.11"
      }
    ]
  ]
};

export const KaleidoPhoton = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.61 6.89 L 19.39 6.89 L 19.39 17.11 L 4.61 17.11 Z" />
      <path d="M 4.61 6.89 L 8.50 3.00 L 23.28 3.00 L 19.39 6.89" />
      <path d="M 19.39 6.89 L 23.28 3.00 L 23.28 13.22 L 19.39 17.11" />
      {children}
    </svg>
  );
});

export default KaleidoPhoton;
