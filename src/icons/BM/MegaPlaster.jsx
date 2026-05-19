import React from 'react';

export const iconData = {
  "id": "MegaPlaster",
  "name": "MegaPlaster",
  "category": "BM",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.45 5.58 C 13.08 18.70, 17.40 11.18, 18.16 16.64"
      }
    ],
    [
      "path",
      {
        "d": "M 4.61 7.67 C 15.46 15.40, 16.69 11.23, 14.58 15.06"
      }
    ],
    [
      "path",
      {
        "d": "M 4.18 4.89 C 11.59 19.88, 7.04 11.79, 17.96 18.41"
      }
    ]
  ]
};

export const MegaPlaster = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.45 5.58 C 13.08 18.70, 17.40 11.18, 18.16 16.64" />
      <path d="M 4.61 7.67 C 15.46 15.40, 16.69 11.23, 14.58 15.06" />
      <path d="M 4.18 4.89 C 11.59 19.88, 7.04 11.79, 17.96 18.41" />
      {children}
    </svg>
  );
});

export default MegaPlaster;
