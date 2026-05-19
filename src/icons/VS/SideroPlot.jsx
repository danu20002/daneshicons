import React from 'react';

export const iconData = {
  "id": "SideroPlot",
  "name": "SideroPlot",
  "category": "VS",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.00 16.95 L 7.05 19.00 L 5.00 7.05 L 16.95 5.00 Z"
      }
    ]
  ]
};

export const SideroPlot = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.00 16.95 L 7.05 19.00 L 5.00 7.05 L 16.95 5.00 Z" />
      {children}
    </svg>
  );
});

export default SideroPlot;
