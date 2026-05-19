import React from 'react';

export const iconData = {
  "id": "VelocePulse",
  "name": "VelocePulse",
  "category": "DI",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.47 6.00 L 19.53 6.00 L 19.53 18.00 L 4.47 18.00 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.47 6.00 L 9.21 1.27 L 24.27 1.27 L 19.53 6.00"
      }
    ],
    [
      "path",
      {
        "d": "M 19.53 6.00 L 24.27 1.27 L 24.27 13.26 L 19.53 18.00"
      }
    ]
  ]
};

export const VelocePulse = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.47 6.00 L 19.53 6.00 L 19.53 18.00 L 4.47 18.00 Z" />
      <path d="M 4.47 6.00 L 9.21 1.27 L 24.27 1.27 L 19.53 6.00" />
      <path d="M 19.53 6.00 L 24.27 1.27 L 24.27 13.26 L 19.53 18.00" />
      {children}
    </svg>
  );
});

export default VelocePulse;
