import React from 'react';

export const iconData = {
  "id": "VacuoTropic",
  "name": "VacuoTropic",
  "category": "YL",
  "nodes": [
    [
      "path",
      {
        "d": "M 13.30 4.10 L 15.27 6.32 L 16.60 3.61 L 15.99 3.08 L 16.25 1.00 L 16.49 1.73 L 15.53 4.07 L 18.33 2.25 L 19.48 4.20 L 16.69 7.05 L 16.91 9.83 L 18.32 9.06 L 16.72 10.69 L 14.52 12.15 L 13.76 13.22 L 13.02 12.41 L 12.58 14.93 L 10.77 15.76 L 13.24 16.49 L 16.01 14.57"
      }
    ]
  ]
};

export const VacuoTropic = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 13.30 4.10 L 15.27 6.32 L 16.60 3.61 L 15.99 3.08 L 16.25 1.00 L 16.49 1.73 L 15.53 4.07 L 18.33 2.25 L 19.48 4.20 L 16.69 7.05 L 16.91 9.83 L 18.32 9.06 L 16.72 10.69 L 14.52 12.15 L 13.76 13.22 L 13.02 12.41 L 12.58 14.93 L 10.77 15.76 L 13.24 16.49 L 16.01 14.57" />
      {children}
    </svg>
  );
});

export default VacuoTropic;
