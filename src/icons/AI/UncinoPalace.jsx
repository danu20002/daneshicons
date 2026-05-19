import React from 'react';

export const iconData = {
  "id": "UncinoPalace",
  "name": "UncinoPalace",
  "category": "AI",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.35 12.34 L 22.61 14.63 L 23.00 13.38 L 21.50 12.07 L 20.85 10.79 L 22.66 13.26 L 23.00 16.00 L 21.01 14.87 L 23.00 12.77 L 22.15 12.15 L 23.00 13.72 L 23.00 11.79 L 23.00 12.87 L 23.00 14.39 L 23.00 12.45 L 23.00 12.00 L 22.39 11.04 L 21.63 10.59 L 23.00 8.36 L 20.70 10.60 L 18.13 11.47 L 18.14 8.68 L 20.98 11.11 L 19.22 13.27 L 17.18 15.05 L 15.22 12.83 L 14.01 14.62 L 13.44 13.86 L 14.08 11.25 L 11.99 12.80 L 13.66 10.55 L 15.27 10.15 L 14.93 12.22 L 16.23 12.46"
      }
    ]
  ]
};

export const UncinoPalace = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.35 12.34 L 22.61 14.63 L 23.00 13.38 L 21.50 12.07 L 20.85 10.79 L 22.66 13.26 L 23.00 16.00 L 21.01 14.87 L 23.00 12.77 L 22.15 12.15 L 23.00 13.72 L 23.00 11.79 L 23.00 12.87 L 23.00 14.39 L 23.00 12.45 L 23.00 12.00 L 22.39 11.04 L 21.63 10.59 L 23.00 8.36 L 20.70 10.60 L 18.13 11.47 L 18.14 8.68 L 20.98 11.11 L 19.22 13.27 L 17.18 15.05 L 15.22 12.83 L 14.01 14.62 L 13.44 13.86 L 14.08 11.25 L 11.99 12.80 L 13.66 10.55 L 15.27 10.15 L 14.93 12.22 L 16.23 12.46" />
      {children}
    </svg>
  );
});

export default UncinoPalace;
