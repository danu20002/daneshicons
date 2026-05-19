import React from 'react';

export const iconData = {
  "id": "VeneroExcess",
  "name": "VeneroExcess",
  "category": "BI",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.04 17.76 L 13.35 14.97 L 11.03 21.85 L 10.10 14.65 L 2.99 16.09 L 8.76 11.68 L 3.96 6.24 L 10.65 9.03 L 12.97 2.15 L 13.90 9.35 L 21.01 7.91 L 15.24 12.32 Z"
      }
    ]
  ]
};

export const VeneroExcess = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.04 17.76 L 13.35 14.97 L 11.03 21.85 L 10.10 14.65 L 2.99 16.09 L 8.76 11.68 L 3.96 6.24 L 10.65 9.03 L 12.97 2.15 L 13.90 9.35 L 21.01 7.91 L 15.24 12.32 Z" />
      {children}
    </svg>
  );
});

export default VeneroExcess;
