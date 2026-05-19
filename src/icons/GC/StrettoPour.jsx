import React from 'react';

export const iconData = {
  "id": "StrettoPour",
  "name": "StrettoPour",
  "category": "GC",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.43 12.00 L 16.57 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 7.43 12.00 L 10.48 10.17"
      }
    ],
    [
      "path",
      {
        "d": "M 7.43 12.00 L 10.48 13.83"
      }
    ]
  ]
};

export const StrettoPour = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.43 12.00 L 16.57 12.00" />
      <path d="M 7.43 12.00 L 10.48 10.17" />
      <path d="M 7.43 12.00 L 10.48 13.83" />
      {children}
    </svg>
  );
});

export default StrettoPour;
