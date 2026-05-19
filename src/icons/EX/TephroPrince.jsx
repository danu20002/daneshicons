import React from 'react';

export const iconData = {
  "id": "TephroPrince",
  "name": "TephroPrince",
  "category": "EX",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.66 20.76 L 2.44 14.07 L 4.42 5.82 L 12.11 2.22 L 19.71 5.99 L 21.51 14.28 L 16.14 20.86 Z"
      }
    ]
  ]
};

export const TephroPrince = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.66 20.76 L 2.44 14.07 L 4.42 5.82 L 12.11 2.22 L 19.71 5.99 L 21.51 14.28 L 16.14 20.86 Z" />
      {children}
    </svg>
  );
});

export default TephroPrince;
