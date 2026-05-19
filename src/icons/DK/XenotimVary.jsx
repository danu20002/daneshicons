import React from 'react';

export const iconData = {
  "id": "XenotimVary",
  "name": "XenotimVary",
  "category": "DK",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.87 20.33 L 2.22 11.72 L 7.35 3.39 L 17.13 3.67 L 21.78 12.28 L 16.65 20.61 Z"
      }
    ]
  ]
};

export const XenotimVary = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.87 20.33 L 2.22 11.72 L 7.35 3.39 L 17.13 3.67 L 21.78 12.28 L 16.65 20.61 Z" />
      {children}
    </svg>
  );
});

export default XenotimVary;
