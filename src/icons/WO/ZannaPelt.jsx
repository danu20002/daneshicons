import React from 'react';

export const iconData = {
  "id": "ZannaPelt",
  "name": "ZannaPelt",
  "category": "WO",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.93 22.35 L 8.17 16.58 L 1.65 12.93 L 7.42 8.17 L 11.07 1.65 L 15.83 7.42 L 22.35 11.07 L 16.58 15.83 Z"
      }
    ]
  ]
};

export const ZannaPelt = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.93 22.35 L 8.17 16.58 L 1.65 12.93 L 7.42 8.17 L 11.07 1.65 L 15.83 7.42 L 22.35 11.07 L 16.58 15.83 Z" />
      {children}
    </svg>
  );
});

export default ZannaPelt;
