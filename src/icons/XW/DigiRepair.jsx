import React from 'react';

export const iconData = {
  "id": "DigiRepair",
  "name": "DigiRepair",
  "category": "XW",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.99 20.97 L 2.73 13.88 L 5.74 4.91 L 15.01 3.03 L 21.27 10.12 L 18.26 19.09 Z"
      }
    ]
  ]
};

export const DigiRepair = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.99 20.97 L 2.73 13.88 L 5.74 4.91 L 15.01 3.03 L 21.27 10.12 L 18.26 19.09 Z" />
      {children}
    </svg>
  );
});

export default DigiRepair;
