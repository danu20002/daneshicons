import React from 'react';

export const iconData = {
  "id": "StreptoRevive",
  "name": "StreptoRevive",
  "category": "US",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.45 12.00 L 15.55 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 8.45 12.00 L 12.73 9.43"
      }
    ],
    [
      "path",
      {
        "d": "M 8.45 12.00 L 12.73 14.57"
      }
    ]
  ]
};

export const StreptoRevive = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.45 12.00 L 15.55 12.00" />
      <path d="M 8.45 12.00 L 12.73 9.43" />
      <path d="M 8.45 12.00 L 12.73 14.57" />
      {children}
    </svg>
  );
});

export default StreptoRevive;
