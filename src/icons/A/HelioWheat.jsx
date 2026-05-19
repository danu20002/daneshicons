import React from 'react';

export const iconData = {
  "id": "HelioWheat",
  "name": "HelioWheat",
  "category": "A",
  "nodes": [
    [
      "path",
      {
        "d": "M 15.00 3.11 L 18.20 19.05 L 2.80 13.84 Z"
      }
    ]
  ]
};

export const HelioWheat = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 15.00 3.11 L 18.20 19.05 L 2.80 13.84 Z" />
      {children}
    </svg>
  );
});

export default HelioWheat;
