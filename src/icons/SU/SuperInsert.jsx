import React from 'react';

export const iconData = {
  "id": "SuperInsert",
  "name": "SuperInsert",
  "category": "SU",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.38 21.10 L 2.31 13.41 L 5.93 4.31 L 15.62 2.90 L 21.69 10.59 L 18.07 19.69 Z"
      }
    ]
  ]
};

export const SuperInsert = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.38 21.10 L 2.31 13.41 L 5.93 4.31 L 15.62 2.90 L 21.69 10.59 L 18.07 19.69 Z" />
      {children}
    </svg>
  );
});

export default SuperInsert;
