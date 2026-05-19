import React from 'react';

export const iconData = {
  "id": "XenicoCauldron",
  "name": "XenicoCauldron",
  "category": "GL",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.06 9.40 L 15.82 13.39 L 17.27 19.81 L 11.86 16.06 L 6.20 19.42 L 8.10 13.12 L 3.15 8.78 L 9.73 8.63 L 12.33 2.58 L 14.50 8.80 Z"
      }
    ]
  ]
};

export const XenicoCauldron = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.06 9.40 L 15.82 13.39 L 17.27 19.81 L 11.86 16.06 L 6.20 19.42 L 8.10 13.12 L 3.15 8.78 L 9.73 8.63 L 12.33 2.58 L 14.50 8.80 Z" />
      {children}
    </svg>
  );
});

export default XenicoCauldron;
