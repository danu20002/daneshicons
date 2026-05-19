import React from 'react';

export const iconData = {
  "id": "QuatroZoom",
  "name": "QuatroZoom",
  "category": "AO",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.73 12.36 L 9.10 4.25 L 18.48 6.85 L 18.90 16.57 L 9.79 19.98 Z"
      }
    ]
  ]
};

export const QuatroZoom = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.73 12.36 L 9.10 4.25 L 18.48 6.85 L 18.90 16.57 L 9.79 19.98 Z" />
      {children}
    </svg>
  );
});

export default QuatroZoom;
