import React from 'react';

export const iconData = {
  "id": "TornadoErosion",
  "name": "TornadoErosion",
  "category": "PV",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.43 20.08 L 3.22 12.95 L 6.79 4.87 L 15.57 3.92 L 20.78 11.05 L 17.21 19.13 Z"
      }
    ]
  ]
};

export const TornadoErosion = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.43 20.08 L 3.22 12.95 L 6.79 4.87 L 15.57 3.92 L 20.78 11.05 L 17.21 19.13 Z" />
      {children}
    </svg>
  );
});

export default TornadoErosion;
