import React from 'react';

export const iconData = {
  "id": "RhizoIllusion",
  "name": "RhizoIllusion",
  "category": "XW",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.31 14.81 L 4.38 6.96 L 11.19 2.90 L 18.61 5.70 L 21.05 13.24 L 16.68 19.85 L 8.78 20.55 Z"
      }
    ]
  ]
};

export const RhizoIllusion = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.31 14.81 L 4.38 6.96 L 11.19 2.90 L 18.61 5.70 L 21.05 13.24 L 16.68 19.85 L 8.78 20.55 Z" />
      {children}
    </svg>
  );
});

export default RhizoIllusion;
