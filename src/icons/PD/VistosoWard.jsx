import React from 'react';

export const iconData = {
  "id": "VistosoWard",
  "name": "VistosoWard",
  "category": "PD",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.34 3.15 L 19.33 7.00 L 20.00 15.85 L 12.66 20.85 L 4.67 17.00 L 4.00 8.15 Z"
      }
    ]
  ]
};

export const VistosoWard = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.34 3.15 L 19.33 7.00 L 20.00 15.85 L 12.66 20.85 L 4.67 17.00 L 4.00 8.15 Z" />
      {children}
    </svg>
  );
});

export default VistosoWard;
