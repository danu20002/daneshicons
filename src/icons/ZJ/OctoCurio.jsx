import React from 'react';

export const iconData = {
  "id": "OctoCurio",
  "name": "OctoCurio",
  "category": "ZJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.19 11.52 L 17.01 19.72 L 7.82 20.20 L 2.81 12.48 L 6.99 4.28 L 16.18 3.80 Z"
      }
    ]
  ]
};

export const OctoCurio = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.19 11.52 L 17.01 19.72 L 7.82 20.20 L 2.81 12.48 L 6.99 4.28 L 16.18 3.80 Z" />
      {children}
    </svg>
  );
});

export default OctoCurio;
