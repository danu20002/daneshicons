import React from 'react';

export const iconData = {
  "id": "VindiceFlood",
  "name": "VindiceFlood",
  "category": "AI",
  "nodes": [
    [
      "path",
      {
        "d": "M 13.65 16.35 L 13.58 18.97 L 13.84 18.90 L 15.46 16.16 L 14.54 15.31 L 17.45 16.64 L 18.91 14.69 L 18.00 13.27 L 18.06 11.69 L 16.53 11.83 L 16.56 10.61 L 16.50 13.51 L 18.37 12.23 L 19.82 11.25 L 22.22 9.07 L 21.47 8.46 L 21.19 10.73 L 19.35 8.48 L 16.80 7.19 L 17.45 8.40 L 16.31 8.70 L 16.07 10.81 L 17.51 11.72 L 15.01 14.35 L 13.10 16.55 L 12.56 14.97 L 11.15 16.89 L 8.57 17.47 L 7.34 16.24 L 7.76 15.65 L 6.41 13.19 L 6.01 14.40 L 3.63 12.87"
      }
    ]
  ]
};

export const VindiceFlood = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 13.65 16.35 L 13.58 18.97 L 13.84 18.90 L 15.46 16.16 L 14.54 15.31 L 17.45 16.64 L 18.91 14.69 L 18.00 13.27 L 18.06 11.69 L 16.53 11.83 L 16.56 10.61 L 16.50 13.51 L 18.37 12.23 L 19.82 11.25 L 22.22 9.07 L 21.47 8.46 L 21.19 10.73 L 19.35 8.48 L 16.80 7.19 L 17.45 8.40 L 16.31 8.70 L 16.07 10.81 L 17.51 11.72 L 15.01 14.35 L 13.10 16.55 L 12.56 14.97 L 11.15 16.89 L 8.57 17.47 L 7.34 16.24 L 7.76 15.65 L 6.41 13.19 L 6.01 14.40 L 3.63 12.87" />
      {children}
    </svg>
  );
});

export default VindiceFlood;
