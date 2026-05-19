import React from 'react';

export const iconData = {
  "id": "VampiroMoment",
  "name": "VampiroMoment",
  "category": "UJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.08 8.45 L 9.96 7.68 L 15.55 2.08 L 16.32 9.96 L 21.92 15.55 L 14.04 16.32 L 8.45 21.92 L 7.68 14.04 Z"
      }
    ]
  ]
};

export const VampiroMoment = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.08 8.45 L 9.96 7.68 L 15.55 2.08 L 16.32 9.96 L 21.92 15.55 L 14.04 16.32 L 8.45 21.92 L 7.68 14.04 Z" />
      {children}
    </svg>
  );
});

export default VampiroMoment;
