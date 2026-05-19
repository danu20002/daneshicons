import React from 'react';

export const iconData = {
  "id": "VentoFlap",
  "name": "VentoFlap",
  "category": "TO",
  "nodes": [
    [
      "path",
      {
        "d": "M 18.00 5.30 L 20.90 10.73 L 19.64 16.74 L 14.80 20.54 L 8.65 20.35 L 4.07 16.24 L 3.20 10.15 L 6.45 4.93 L 12.29 3.01 Z"
      }
    ]
  ]
};

export const VentoFlap = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 18.00 5.30 L 20.90 10.73 L 19.64 16.74 L 14.80 20.54 L 8.65 20.35 L 4.07 16.24 L 3.20 10.15 L 6.45 4.93 L 12.29 3.01 Z" />
      {children}
    </svg>
  );
});

export default VentoFlap;
