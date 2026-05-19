import React from 'react';

export const iconData = {
  "id": "XerograPopular",
  "name": "XerograPopular",
  "category": "UH",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.71 7.38 L 11.86 2.51 L 20.14 7.13 L 20.29 16.62 L 12.14 21.49 L 3.86 16.87 Z"
      }
    ]
  ]
};

export const XerograPopular = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.71 7.38 L 11.86 2.51 L 20.14 7.13 L 20.29 16.62 L 12.14 21.49 L 3.86 16.87 Z" />
      {children}
    </svg>
  );
});

export default XerograPopular;
