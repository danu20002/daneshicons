import React from 'react';

export const iconData = {
  "id": "VolleyGuest",
  "name": "VolleyGuest",
  "category": "QO",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.76 8.32 L 15.68 3.76 L 20.24 15.68 L 8.32 20.24 Z"
      }
    ]
  ]
};

export const VolleyGuest = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.76 8.32 L 15.68 3.76 L 20.24 15.68 L 8.32 20.24 Z" />
      {children}
    </svg>
  );
});

export default VolleyGuest;
