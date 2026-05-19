import React from 'react';

export const iconData = {
  "id": "SelenoLush",
  "name": "SelenoLush",
  "category": "CU",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.67 18.07 L 13.16 16.16 L 8.60 21.17 L 8.40 14.39 L 2.22 11.60 L 8.61 9.32 L 9.36 2.58 L 13.50 7.95 L 20.15 6.58 L 16.32 12.18 Z"
      }
    ]
  ]
};

export const SelenoLush = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.67 18.07 L 13.16 16.16 L 8.60 21.17 L 8.40 14.39 L 2.22 11.60 L 8.61 9.32 L 9.36 2.58 L 13.50 7.95 L 20.15 6.58 L 16.32 12.18 Z" />
      {children}
    </svg>
  );
});

export default SelenoLush;
