import React from 'react';

export const iconData = {
  "id": "PeriPeanut",
  "name": "PeriPeanut",
  "category": "ME",
  "nodes": [
    [
      "path",
      {
        "d": "M 18.68 7.30 L 18.53 16.90 L 9.36 19.73 L 3.83 11.87 L 9.60 4.19 Z"
      }
    ]
  ]
};

export const PeriPeanut = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 18.68 7.30 L 18.53 16.90 L 9.36 19.73 L 3.83 11.87 L 9.60 4.19 Z" />
      {children}
    </svg>
  );
});

export default PeriPeanut;
