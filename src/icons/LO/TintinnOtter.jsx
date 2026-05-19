import React from 'react';

export const iconData = {
  "id": "TintinnOtter",
  "name": "TintinnOtter",
  "category": "LO",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.32 20.40 L 8.26 14.24 L 2.39 12.15 L 8.19 9.88 L 7.07 3.75 L 11.93 7.64 L 16.68 3.60 L 15.74 9.76 L 21.61 11.85 L 15.81 14.12 L 16.93 20.25 L 12.07 16.36 Z"
      }
    ]
  ]
};

export const TintinnOtter = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.32 20.40 L 8.26 14.24 L 2.39 12.15 L 8.19 9.88 L 7.07 3.75 L 11.93 7.64 L 16.68 3.60 L 15.74 9.76 L 21.61 11.85 L 15.81 14.12 L 16.93 20.25 L 12.07 16.36 Z" />
      {children}
    </svg>
  );
});

export default TintinnOtter;
