import React from 'react';

export const iconData = {
  "id": "VegliaMature",
  "name": "VegliaMature",
  "category": "XB",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.68 6.09 L 20.32 6.09 L 20.32 17.91 L 3.68 17.91 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.68 6.09 L 7.61 2.15 L 24.25 2.15 L 20.32 6.09"
      }
    ],
    [
      "path",
      {
        "d": "M 20.32 6.09 L 24.25 2.15 L 24.25 13.98 L 20.32 17.91"
      }
    ]
  ]
};

export const VegliaMature = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.68 6.09 L 20.32 6.09 L 20.32 17.91 L 3.68 17.91 Z" />
      <path d="M 3.68 6.09 L 7.61 2.15 L 24.25 2.15 L 20.32 6.09" />
      <path d="M 20.32 6.09 L 24.25 2.15 L 24.25 13.98 L 20.32 17.91" />
      {children}
    </svg>
  );
});

export default VegliaMature;
