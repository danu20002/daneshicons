import React from 'react';

export const iconData = {
  "id": "SelenoHeaven",
  "name": "SelenoHeaven",
  "category": "JA",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.00 2.64 L 17.29 12.00 L 12.00 21.36 L 6.71 12.00 Z"
      }
    ]
  ]
};

export const SelenoHeaven = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.00 2.64 L 17.29 12.00 L 12.00 21.36 L 6.71 12.00 Z" />
      {children}
    </svg>
  );
});

export default SelenoHeaven;
