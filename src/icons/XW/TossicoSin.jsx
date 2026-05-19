import React from 'react';

export const iconData = {
  "id": "TossicoSin",
  "name": "TossicoSin",
  "category": "XW",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.60 8.34 L 11.47 3.76 L 18.87 7.42 L 19.40 15.66 L 12.53 20.24 L 5.13 16.58 Z"
      }
    ]
  ]
};

export const TossicoSin = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.60 8.34 L 11.47 3.76 L 18.87 7.42 L 19.40 15.66 L 12.53 20.24 L 5.13 16.58 Z" />
      {children}
    </svg>
  );
});

export default TossicoSin;
