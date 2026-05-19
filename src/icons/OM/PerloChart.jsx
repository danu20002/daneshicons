import React from 'react';

export const iconData = {
  "id": "PerloChart",
  "name": "PerloChart",
  "category": "OM",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.40 4.46 L 11.29 8.39 L 15.23 2.51 L 14.77 9.58 L 21.83 10.05 L 15.48 13.18 L 18.60 19.54 L 12.71 15.61 L 8.77 21.49 L 9.23 14.42 L 2.17 13.95 L 8.52 10.82 Z"
      }
    ]
  ]
};

export const PerloChart = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.40 4.46 L 11.29 8.39 L 15.23 2.51 L 14.77 9.58 L 21.83 10.05 L 15.48 13.18 L 18.60 19.54 L 12.71 15.61 L 8.77 21.49 L 9.23 14.42 L 2.17 13.95 L 8.52 10.82 Z" />
      {children}
    </svg>
  );
});

export default PerloChart;
