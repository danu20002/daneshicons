import React from 'react';

export const iconData = {
  "id": "UrticeMetal",
  "name": "UrticeMetal",
  "category": "JK",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.72 6.48 L 10.61 6.51 L 17.52 2.72 L 17.49 10.61 L 21.28 17.52 L 13.39 17.49 L 6.48 21.28 L 6.51 13.39 Z"
      }
    ]
  ]
};

export const UrticeMetal = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.72 6.48 L 10.61 6.51 L 17.52 2.72 L 17.49 10.61 L 21.28 17.52 L 13.39 17.49 L 6.48 21.28 L 6.51 13.39 Z" />
      {children}
    </svg>
  );
});

export default UrticeMetal;
