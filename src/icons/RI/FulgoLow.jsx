import React from 'react';

export const iconData = {
  "id": "FulgoLow",
  "name": "FulgoLow",
  "category": "RI",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.50 12.92 L 14.07 21.32 L 3.77 16.84 L 4.85 5.67 L 15.81 3.25 Z"
      }
    ]
  ]
};

export const FulgoLow = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.50 12.92 L 14.07 21.32 L 3.77 16.84 L 4.85 5.67 L 15.81 3.25 Z" />
      {children}
    </svg>
  );
});

export default FulgoLow;
