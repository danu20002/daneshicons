import React from 'react';

export const iconData = {
  "id": "VigileCharm",
  "name": "VigileCharm",
  "category": "JZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 18.90 18.28 L 5.72 18.90 L 5.10 5.72 L 18.28 5.10 Z"
      }
    ]
  ]
};

export const VigileCharm = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 18.90 18.28 L 5.72 18.90 L 5.10 5.72 L 18.28 5.10 Z" />
      {children}
    </svg>
  );
});

export default VigileCharm;
