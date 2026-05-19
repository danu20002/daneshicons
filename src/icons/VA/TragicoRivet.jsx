import React from 'react';

export const iconData = {
  "id": "TragicoRivet",
  "name": "TragicoRivet",
  "category": "VA",
  "nodes": [
    [
      "path",
      {
        "d": "M 18.98 7.52 L 19.85 14.66 L 14.81 19.80 L 7.66 19.06 L 3.77 13.01 L 6.08 6.19 L 12.85 3.75 Z"
      }
    ]
  ]
};

export const TragicoRivet = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 18.98 7.52 L 19.85 14.66 L 14.81 19.80 L 7.66 19.06 L 3.77 13.01 L 6.08 6.19 L 12.85 3.75 Z" />
      {children}
    </svg>
  );
});

export default TragicoRivet;
