import React from 'react';

export const iconData = {
  "id": "HibernoPatch",
  "name": "HibernoPatch",
  "category": "GC",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.35 12.93 L 11.07 21.35 L 2.65 11.07 L 12.93 2.65 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 17.44 14.64 L 9.36 17.44 L 6.56 9.36 L 14.64 6.56 Z"
      }
    ]
  ]
};

export const HibernoPatch = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.35 12.93 L 11.07 21.35 L 2.65 11.07 L 12.93 2.65 Z" />
      <path d="M 17.44 14.64 L 9.36 17.44 L 6.56 9.36 L 14.64 6.56 Z" />
      {children}
    </svg>
  );
});

export default HibernoPatch;
