import React from 'react';

export const iconData = {
  "id": "VectisLittle",
  "name": "VectisLittle",
  "category": "PW",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.36 14.99 L 9.01 20.36 L 3.64 9.01 L 14.99 3.64 Z"
      }
    ]
  ]
};

export const VectisLittle = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.36 14.99 L 9.01 20.36 L 3.64 9.01 L 14.99 3.64 Z" />
      {children}
    </svg>
  );
});

export default VectisLittle;
