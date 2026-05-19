import React from 'react';

export const iconData = {
  "id": "UmbelMarmalade",
  "name": "UmbelMarmalade",
  "category": "UH",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.26 9.40 L 12.08 3.84 L 19.79 9.55 L 16.73 18.65 L 7.14 18.56 Z"
      }
    ]
  ]
};

export const UmbelMarmalade = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.26 9.40 L 12.08 3.84 L 19.79 9.55 L 16.73 18.65 L 7.14 18.56 Z" />
      {children}
    </svg>
  );
});

export default UmbelMarmalade;
