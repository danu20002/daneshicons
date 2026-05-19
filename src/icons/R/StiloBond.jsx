import React from 'react';

export const iconData = {
  "id": "StiloBond",
  "name": "StiloBond",
  "category": "R",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.94 6.23 L 20.06 6.23 L 20.06 17.77 L 3.94 17.77 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.94 6.23 L 7.75 2.43 L 23.86 2.43 L 20.06 6.23"
      }
    ],
    [
      "path",
      {
        "d": "M 20.06 6.23 L 23.86 2.43 L 23.86 13.96 L 20.06 17.77"
      }
    ]
  ]
};

export const StiloBond = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.94 6.23 L 20.06 6.23 L 20.06 17.77 L 3.94 17.77 Z" />
      <path d="M 3.94 6.23 L 7.75 2.43 L 23.86 2.43 L 20.06 6.23" />
      <path d="M 20.06 6.23 L 23.86 2.43 L 23.86 13.96 L 20.06 17.77" />
      {children}
    </svg>
  );
});

export default StiloBond;
