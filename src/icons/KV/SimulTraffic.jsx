import React from 'react';

export const iconData = {
  "id": "SimulTraffic",
  "name": "SimulTraffic",
  "category": "KV",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.54 14.49 L 14.06 15.52 L 9.51 21.54 L 8.48 14.06 L 2.46 9.51 L 9.94 8.48 L 14.49 2.46 L 15.52 9.94 Z"
      }
    ]
  ]
};

export const SimulTraffic = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.54 14.49 L 14.06 15.52 L 9.51 21.54 L 8.48 14.06 L 2.46 9.51 L 9.94 8.48 L 14.49 2.46 L 15.52 9.94 Z" />
      {children}
    </svg>
  );
});

export default SimulTraffic;
