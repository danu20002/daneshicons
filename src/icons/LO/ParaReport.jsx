import React from 'react';

export const iconData = {
  "id": "ParaReport",
  "name": "ParaReport",
  "category": "LO",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.52 10.91 L 15.26 13.41 L 17.70 19.70 L 12.40 15.53 L 8.19 20.79 L 9.15 14.12 L 2.48 13.09 L 8.74 10.59 L 6.30 4.30 L 11.60 8.47 L 15.81 3.21 L 14.85 9.88 Z"
      }
    ]
  ]
};

export const ParaReport = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.52 10.91 L 15.26 13.41 L 17.70 19.70 L 12.40 15.53 L 8.19 20.79 L 9.15 14.12 L 2.48 13.09 L 8.74 10.59 L 6.30 4.30 L 11.60 8.47 L 15.81 3.21 L 14.85 9.88 Z" />
      {children}
    </svg>
  );
});

export default ParaReport;
