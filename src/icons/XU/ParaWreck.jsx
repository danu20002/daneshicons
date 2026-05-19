import React from 'react';

export const iconData = {
  "id": "ParaWreck",
  "name": "ParaWreck",
  "category": "XU",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.03 5.90 L 20.97 5.90 L 20.97 18.10 L 3.03 18.10 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.03 5.90 L 7.74 1.19 L 25.69 1.19 L 20.97 5.90"
      }
    ],
    [
      "path",
      {
        "d": "M 20.97 5.90 L 25.69 1.19 L 25.69 13.38 L 20.97 18.10"
      }
    ]
  ]
};

export const ParaWreck = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.03 5.90 L 20.97 5.90 L 20.97 18.10 L 3.03 18.10 Z" />
      <path d="M 3.03 5.90 L 7.74 1.19 L 25.69 1.19 L 20.97 5.90" />
      <path d="M 20.97 5.90 L 25.69 1.19 L 25.69 13.38 L 20.97 18.10" />
      {children}
    </svg>
  );
});

export default ParaWreck;
