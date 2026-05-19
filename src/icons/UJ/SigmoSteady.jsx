import React from 'react';

export const iconData = {
  "id": "SigmoSteady",
  "name": "SigmoSteady",
  "category": "UJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.05 20.65 L 8.57 12.68 L 5.98 5.12 L 13.13 8.70 L 20.97 10.23 L 14.30 14.63 Z"
      }
    ]
  ]
};

export const SigmoSteady = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.05 20.65 L 8.57 12.68 L 5.98 5.12 L 13.13 8.70 L 20.97 10.23 L 14.30 14.63 Z" />
      {children}
    </svg>
  );
});

export default SigmoSteady;
