import React from 'react';

export const iconData = {
  "id": "VicinoKnow",
  "name": "VicinoKnow",
  "category": "MV",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.49 5.11 L 19.51 5.11 L 19.51 18.89 L 4.49 18.89 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.49 5.11 L 8.09 1.52 L 23.10 1.52 L 19.51 5.11"
      }
    ],
    [
      "path",
      {
        "d": "M 19.51 5.11 L 23.10 1.52 L 23.10 15.30 L 19.51 18.89"
      }
    ]
  ]
};

export const VicinoKnow = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.49 5.11 L 19.51 5.11 L 19.51 18.89 L 4.49 18.89 Z" />
      <path d="M 4.49 5.11 L 8.09 1.52 L 23.10 1.52 L 19.51 5.11" />
      <path d="M 19.51 5.11 L 23.10 1.52 L 23.10 15.30 L 19.51 18.89" />
      {children}
    </svg>
  );
});

export default VicinoKnow;
