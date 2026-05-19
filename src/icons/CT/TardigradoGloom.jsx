import React from 'react';

export const iconData = {
  "id": "TardigradoGloom",
  "name": "TardigradoGloom",
  "category": "CT",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.58 10.99 L 19.22 16.74 L 14.49 20.27 L 8.59 19.93 L 4.29 15.89 L 3.59 10.02 L 6.83 5.08 L 12.49 3.38 L 17.92 5.71 Z"
      }
    ]
  ]
};

export const TardigradoGloom = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.58 10.99 L 19.22 16.74 L 14.49 20.27 L 8.59 19.93 L 4.29 15.89 L 3.59 10.02 L 6.83 5.08 L 12.49 3.38 L 17.92 5.71 Z" />
      {children}
    </svg>
  );
});

export default TardigradoGloom;
