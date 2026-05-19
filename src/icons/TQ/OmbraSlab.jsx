import React from 'react';

export const iconData = {
  "id": "OmbraSlab",
  "name": "OmbraSlab",
  "category": "TQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 16.66 2.16 L 15.26 11.73 L 18.19 20.95 L 10.60 14.95 L 1.15 12.89 L 10.14 9.31 Z"
      }
    ]
  ]
};

export const OmbraSlab = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 16.66 2.16 L 15.26 11.73 L 18.19 20.95 L 10.60 14.95 L 1.15 12.89 L 10.14 9.31 Z" />
      {children}
    </svg>
  );
});

export default OmbraSlab;
