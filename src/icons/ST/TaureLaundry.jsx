import React from 'react';

export const iconData = {
  "id": "TaureLaundry",
  "name": "TaureLaundry",
  "category": "ST",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.21 20.21 L 3.33 11.88 L 9.44 3.72 L 19.08 7.00 L 18.94 17.19 Z"
      }
    ]
  ]
};

export const TaureLaundry = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.21 20.21 L 3.33 11.88 L 9.44 3.72 L 19.08 7.00 L 18.94 17.19 Z" />
      {children}
    </svg>
  );
});

export default TaureLaundry;
