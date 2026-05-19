import React from 'react';

export const iconData = {
  "id": "StriatoWise",
  "name": "StriatoWise",
  "category": "CV",
  "nodes": [
    [
      "path",
      {
        "d": "M 14.82 1.88 L 16.81 9.29 L 22.12 14.82 L 14.71 16.81 L 9.18 22.12 L 7.19 14.71 L 1.88 9.18 L 9.29 7.19 Z"
      }
    ]
  ]
};

export const StriatoWise = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 14.82 1.88 L 16.81 9.29 L 22.12 14.82 L 14.71 16.81 L 9.18 22.12 L 7.19 14.71 L 1.88 9.18 L 9.29 7.19 Z" />
      {children}
    </svg>
  );
});

export default StriatoWise;
