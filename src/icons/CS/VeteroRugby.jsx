import React from 'react';

export const iconData = {
  "id": "VeteroRugby",
  "name": "VeteroRugby",
  "category": "CS",
  "nodes": [
    [
      "path",
      {
        "d": "M 17.80 5.07 L 20.90 13.55 L 15.11 20.49 L 6.20 18.93 L 3.10 10.45 L 8.89 3.51 Z"
      }
    ]
  ]
};

export const VeteroRugby = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 17.80 5.07 L 20.90 13.55 L 15.11 20.49 L 6.20 18.93 L 3.10 10.45 L 8.89 3.51 Z" />
      {children}
    </svg>
  );
});

export default VeteroRugby;
