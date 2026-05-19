import React from 'react';

export const iconData = {
  "id": "VarioloInvest",
  "name": "VarioloInvest",
  "category": "BU",
  "nodes": [
    [
      "path",
      {
        "d": "M 13.24 10.33 L 15.76 7.38 L 14.98 4.81 L 12.22 5.64 L 14.11 5.56 L 13.32 2.77 L 14.10 2.10 L 11.17 1.95 L 8.30 1.49 L 7.93 1.00 L 7.57 1.00 L 7.90 1.00 L 9.02 1.00 L 7.47 3.04 L 9.20 3.70 L 10.55 6.29 L 10.75 4.62 L 10.47 5.78 L 11.75 4.23 L 13.69 4.30 L 16.11 3.59 L 15.32 4.15 L 13.95 4.07 L 14.21 1.53 L 14.76 3.94 L 13.30 5.13 L 13.73 3.87 L 15.25 6.77 L 15.64 8.82 L 12.82 9.22 L 12.09 8.29"
      }
    ]
  ]
};

export const VarioloInvest = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 13.24 10.33 L 15.76 7.38 L 14.98 4.81 L 12.22 5.64 L 14.11 5.56 L 13.32 2.77 L 14.10 2.10 L 11.17 1.95 L 8.30 1.49 L 7.93 1.00 L 7.57 1.00 L 7.90 1.00 L 9.02 1.00 L 7.47 3.04 L 9.20 3.70 L 10.55 6.29 L 10.75 4.62 L 10.47 5.78 L 11.75 4.23 L 13.69 4.30 L 16.11 3.59 L 15.32 4.15 L 13.95 4.07 L 14.21 1.53 L 14.76 3.94 L 13.30 5.13 L 13.73 3.87 L 15.25 6.77 L 15.64 8.82 L 12.82 9.22 L 12.09 8.29" />
      {children}
    </svg>
  );
});

export default VarioloInvest;
