import React from 'react';

export const iconData = {
  "id": "VincoloDeploy",
  "name": "VincoloDeploy",
  "category": "WK",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.44 18.49 L 11.57 21.86 L 4.02 17.81 L 2.48 9.39 L 8.11 2.93 L 16.67 3.30 L 21.71 10.22 Z"
      }
    ]
  ]
};

export const VincoloDeploy = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.44 18.49 L 11.57 21.86 L 4.02 17.81 L 2.48 9.39 L 8.11 2.93 L 16.67 3.30 L 21.71 10.22 Z" />
      {children}
    </svg>
  );
});

export default VincoloDeploy;
