import React from 'react';

export const iconData = {
  "id": "ZoppicoEdict",
  "name": "ZoppicoEdict",
  "category": "BW",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.40 6.03 L 19.60 6.03 L 19.60 17.97 L 4.40 17.97 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.40 6.03 L 8.77 1.65 L 23.98 1.65 L 19.60 6.03"
      }
    ],
    [
      "path",
      {
        "d": "M 19.60 6.03 L 23.98 1.65 L 23.98 13.60 L 19.60 17.97"
      }
    ]
  ]
};

export const ZoppicoEdict = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.40 6.03 L 19.60 6.03 L 19.60 17.97 L 4.40 17.97 Z" />
      <path d="M 4.40 6.03 L 8.77 1.65 L 23.98 1.65 L 19.60 6.03" />
      <path d="M 19.60 6.03 L 23.98 1.65 L 23.98 13.60 L 19.60 17.97" />
      {children}
    </svg>
  );
});

export default ZoppicoEdict;
