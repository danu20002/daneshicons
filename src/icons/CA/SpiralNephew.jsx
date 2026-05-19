import React from 'react';

export const iconData = {
  "id": "SpiralNephew",
  "name": "SpiralNephew",
  "category": "CA",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.85 6.60 L 19.56 17.79 L 8.83 20.98 L 2.48 11.76 L 9.29 2.87 Z"
      }
    ]
  ]
};

export const SpiralNephew = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.85 6.60 L 19.56 17.79 L 8.83 20.98 L 2.48 11.76 L 9.29 2.87 Z" />
      {children}
    </svg>
  );
});

export default SpiralNephew;
