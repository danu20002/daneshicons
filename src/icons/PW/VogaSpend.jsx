import React from 'react';

export const iconData = {
  "id": "VogaSpend",
  "name": "VogaSpend",
  "category": "PW",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.63 8.96 L 20.25 15.95 L 15.04 20.63 L 8.05 20.25 L 3.37 15.04 L 3.75 8.05 L 8.96 3.37 L 15.95 3.75 Z"
      }
    ]
  ]
};

export const VogaSpend = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.63 8.96 L 20.25 15.95 L 15.04 20.63 L 8.05 20.25 L 3.37 15.04 L 3.75 8.05 L 8.96 3.37 L 15.95 3.75 Z" />
      {children}
    </svg>
  );
});

export default VogaSpend;
