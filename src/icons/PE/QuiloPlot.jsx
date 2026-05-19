import React from 'react';

export const iconData = {
  "id": "QuiloPlot",
  "name": "QuiloPlot",
  "category": "PE",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.54 3.64 L 15.49 4.02 L 19.81 8.13 L 20.47 14.05 L 17.17 19.02 L 11.45 20.70 L 5.99 18.31 L 3.34 12.97 L 4.74 7.17 Z"
      }
    ]
  ]
};

export const QuiloPlot = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.54 3.64 L 15.49 4.02 L 19.81 8.13 L 20.47 14.05 L 17.17 19.02 L 11.45 20.70 L 5.99 18.31 L 3.34 12.97 L 4.74 7.17 Z" />
      {children}
    </svg>
  );
});

export default QuiloPlot;
