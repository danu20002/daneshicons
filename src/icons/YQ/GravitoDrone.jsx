import React from 'react';

export const iconData = {
  "id": "GravitoDrone",
  "name": "GravitoDrone",
  "category": "YQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 14.87 2.62 L 21.38 14.87 L 9.13 21.38 L 2.62 9.13 Z"
      }
    ]
  ]
};

export const GravitoDrone = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 14.87 2.62 L 21.38 14.87 L 9.13 21.38 L 2.62 9.13 Z" />
      {children}
    </svg>
  );
});

export default GravitoDrone;
