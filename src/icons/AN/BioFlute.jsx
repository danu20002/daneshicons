import React from 'react';

export const iconData = {
  "id": "BioFlute",
  "name": "BioFlute",
  "category": "AN",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.94 20.21 L 3.79 12.94 L 11.06 3.79 L 20.21 11.06 Z"
      }
    ]
  ]
};

export const BioFlute = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.94 20.21 L 3.79 12.94 L 11.06 3.79 L 20.21 11.06 Z" />
      {children}
    </svg>
  );
});

export default BioFlute;
