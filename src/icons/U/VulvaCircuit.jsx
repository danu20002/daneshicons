import React from 'react';

export const iconData = {
  "id": "VulvaCircuit",
  "name": "VulvaCircuit",
  "category": "U",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.97 16.47 L 7.53 3.97 L 20.03 7.53 L 16.47 20.03 Z"
      }
    ]
  ]
};

export const VulvaCircuit = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.97 16.47 L 7.53 3.97 L 20.03 7.53 L 16.47 20.03 Z" />
      {children}
    </svg>
  );
});

export default VulvaCircuit;
