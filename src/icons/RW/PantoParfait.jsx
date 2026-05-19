import React from 'react';

export const iconData = {
  "id": "PantoParfait",
  "name": "PantoParfait",
  "category": "RW",
  "nodes": [
    [
      "path",
      {
        "d": "M 17.25 10.05 L 14.72 11.18 L 17.06 9.95 L 18.77 8.99 L 16.59 8.77 L 15.09 11.45 L 15.41 9.63 L 14.18 8.48 L 12.19 11.34 L 13.79 11.98 L 12.82 9.60 L 11.17 10.29 L 10.93 9.39 L 12.83 9.89 L 12.19 11.87 L 11.96 14.27 L 13.85 15.18 L 12.19 13.50"
      }
    ]
  ]
};

export const PantoParfait = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 17.25 10.05 L 14.72 11.18 L 17.06 9.95 L 18.77 8.99 L 16.59 8.77 L 15.09 11.45 L 15.41 9.63 L 14.18 8.48 L 12.19 11.34 L 13.79 11.98 L 12.82 9.60 L 11.17 10.29 L 10.93 9.39 L 12.83 9.89 L 12.19 11.87 L 11.96 14.27 L 13.85 15.18 L 12.19 13.50" />
      {children}
    </svg>
  );
});

export default PantoParfait;
