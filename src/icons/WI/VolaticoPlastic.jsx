import React from 'react';

export const iconData = {
  "id": "VolaticoPlastic",
  "name": "VolaticoPlastic",
  "category": "WI",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.11 6.06 L 20.89 6.06 L 20.89 17.94 L 3.11 17.94 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.11 6.06 L 7.07 2.09 L 24.85 2.09 L 20.89 6.06"
      }
    ],
    [
      "path",
      {
        "d": "M 20.89 6.06 L 24.85 2.09 L 24.85 13.98 L 20.89 17.94"
      }
    ]
  ]
};

export const VolaticoPlastic = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.11 6.06 L 20.89 6.06 L 20.89 17.94 L 3.11 17.94 Z" />
      <path d="M 3.11 6.06 L 7.07 2.09 L 24.85 2.09 L 20.89 6.06" />
      <path d="M 20.89 6.06 L 24.85 2.09 L 24.85 13.98 L 20.89 17.94" />
      {children}
    </svg>
  );
});

export default VolaticoPlastic;
