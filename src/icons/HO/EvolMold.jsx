import React from 'react';

export const iconData = {
  "id": "EvolMold",
  "name": "EvolMold",
  "category": "HO",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.44 12.54 L 14.41 21.14 L 4.05 17.11 L 4.68 6.02 L 15.43 3.19 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 17.81 14.06 L 11.83 18.16 L 6.09 13.75 L 8.51 6.92 L 15.76 7.11 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 14.56 14.30 L 10.60 15.14 L 8.58 11.64 L 11.28 8.64 L 14.98 10.28 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 12.26 12.40 L 11.70 12.37 L 11.55 11.83 L 12.03 11.52 L 12.47 11.88 Z"
      }
    ]
  ]
};

export const EvolMold = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.44 12.54 L 14.41 21.14 L 4.05 17.11 L 4.68 6.02 L 15.43 3.19 Z" />
      <path d="M 17.81 14.06 L 11.83 18.16 L 6.09 13.75 L 8.51 6.92 L 15.76 7.11 Z" />
      <path d="M 14.56 14.30 L 10.60 15.14 L 8.58 11.64 L 11.28 8.64 L 14.98 10.28 Z" />
      <path d="M 12.26 12.40 L 11.70 12.37 L 11.55 11.83 L 12.03 11.52 L 12.47 11.88 Z" />
      {children}
    </svg>
  );
});

export default EvolMold;
