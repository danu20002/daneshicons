import React from 'react';

export const iconData = {
  "id": "VogaStrength",
  "name": "VogaStrength",
  "category": "TN",
  "nodes": [
    [
      "path",
      {
        "d": "M 18.38 6.26 L 13.78 20.40 L 3.84 9.34 Z"
      }
    ]
  ]
};

export const VogaStrength = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 18.38 6.26 L 13.78 20.40 L 3.84 9.34 Z" />
      {children}
    </svg>
  );
});

export default VogaStrength;
