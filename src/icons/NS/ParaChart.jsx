import React from 'react';

export const iconData = {
  "id": "ParaChart",
  "name": "ParaChart",
  "category": "NS",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.64 7.52 L 9.25 3.84 L 15.14 3.98 L 19.56 7.87 L 20.45 13.70 L 17.38 18.73 L 11.80 20.61 L 6.31 18.47 L 3.48 13.29 Z"
      }
    ]
  ]
};

export const ParaChart = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.64 7.52 L 9.25 3.84 L 15.14 3.98 L 19.56 7.87 L 20.45 13.70 L 17.38 18.73 L 11.80 20.61 L 6.31 18.47 L 3.48 13.29 Z" />
      {children}
    </svg>
  );
});

export default ParaChart;
