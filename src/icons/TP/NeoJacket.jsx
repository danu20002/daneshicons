import React from 'react';

export const iconData = {
  "id": "NeoJacket",
  "name": "NeoJacket",
  "category": "TP",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.94 17.52 L 8.26 12.09 L 2.69 6.91 L 10.06 8.81 L 11.75 1.40 L 13.79 8.72 L 21.06 6.48 L 15.74 11.91 L 21.31 17.09 L 13.94 15.19 L 12.25 22.60 L 10.21 15.28 Z"
      }
    ]
  ]
};

export const NeoJacket = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.94 17.52 L 8.26 12.09 L 2.69 6.91 L 10.06 8.81 L 11.75 1.40 L 13.79 8.72 L 21.06 6.48 L 15.74 11.91 L 21.31 17.09 L 13.94 15.19 L 12.25 22.60 L 10.21 15.28 Z" />
      {children}
    </svg>
  );
});

export default NeoJacket;
