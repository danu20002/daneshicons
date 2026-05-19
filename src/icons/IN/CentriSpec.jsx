import React from 'react';

export const iconData = {
  "id": "CentriSpec",
  "name": "CentriSpec",
  "category": "IN",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.03 9.80 L 16.57 18.96 L 6.79 18.50 L 4.21 9.06 L 12.39 3.68 Z"
      }
    ]
  ]
};

export const CentriSpec = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.03 9.80 L 16.57 18.96 L 6.79 18.50 L 4.21 9.06 L 12.39 3.68 Z" />
      {children}
    </svg>
  );
});

export default CentriSpec;
