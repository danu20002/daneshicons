import React from 'react';

export const iconData = {
  "id": "OptoFloret",
  "name": "OptoFloret",
  "category": "VC",
  "nodes": [
    [
      "path",
      {
        "d": "M 22.57 11.02 L 15.75 14.23 L 16.20 21.75 L 11.04 16.26 L 4.02 19.01 L 7.65 12.40 L 2.87 6.58 L 10.27 7.99 L 14.34 1.64 L 15.28 9.12 Z"
      }
    ]
  ]
};

export const OptoFloret = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 22.57 11.02 L 15.75 14.23 L 16.20 21.75 L 11.04 16.26 L 4.02 19.01 L 7.65 12.40 L 2.87 6.58 L 10.27 7.99 L 14.34 1.64 L 15.28 9.12 Z" />
      {children}
    </svg>
  );
});

export default OptoFloret;
