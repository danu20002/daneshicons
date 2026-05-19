import React from 'react';

export const iconData = {
  "id": "CirroPlot",
  "name": "CirroPlot",
  "category": "BS",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.52 12.07 7.91 10.34 Q 10.50 8.74 13.10 7.13 Q 13.42 8.13 13.74 9.14 Q 15.37 7.67 16.99 6.21 Q 15.38 8.42 13.77 10.62 Q 15.07 10.39 16.37 10.16 Q 17.28 10.68 18.19 11.20 Q 10.66 12.50 3.13 13.79 Z"
      }
    ]
  ]
};

export const CirroPlot = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.52 12.07 7.91 10.34 Q 10.50 8.74 13.10 7.13 Q 13.42 8.13 13.74 9.14 Q 15.37 7.67 16.99 6.21 Q 15.38 8.42 13.77 10.62 Q 15.07 10.39 16.37 10.16 Q 17.28 10.68 18.19 11.20 Q 10.66 12.50 3.13 13.79 Z" />
      {children}
    </svg>
  );
});

export default CirroPlot;
