import React from 'react';

export const iconData = {
  "id": "BrakeParcel",
  "name": "BrakeParcel",
  "category": "VV",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.40 8.51 L 16.00 15.32 L 10.32 21.88 L 7.13 13.81 L 4.28 5.60 L 12.87 6.88 Z"
      }
    ]
  ]
};

export const BrakeParcel = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.40 8.51 L 16.00 15.32 L 10.32 21.88 L 7.13 13.81 L 4.28 5.60 L 12.87 6.88 Z" />
      {children}
    </svg>
  );
});

export default BrakeParcel;
