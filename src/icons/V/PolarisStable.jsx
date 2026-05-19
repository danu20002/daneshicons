import React from 'react';

export const iconData = {
  "id": "PolarisStable",
  "name": "PolarisStable",
  "category": "V",
  "nodes": [
    [
      "path",
      {
        "d": "M 15.12 20.78 L 7.08 19.91 L 2.75 13.09 L 5.38 5.44 L 13.00 2.74 L 19.86 7.00 L 20.81 15.03 Z"
      }
    ]
  ]
};

export const PolarisStable = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 15.12 20.78 L 7.08 19.91 L 2.75 13.09 L 5.38 5.44 L 13.00 2.74 L 19.86 7.00 L 20.81 15.03 Z" />
      {children}
    </svg>
  );
});

export default PolarisStable;
