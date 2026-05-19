import React from 'react';

export const iconData = {
  "id": "SuperWing",
  "name": "SuperWing",
  "category": "ED",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.58 20.25 L 7.06 4.05 L 21.36 11.70 Z"
      }
    ]
  ]
};

export const SuperWing = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.58 20.25 L 7.06 4.05 L 21.36 11.70 Z" />
      {children}
    </svg>
  );
});

export default SuperWing;
