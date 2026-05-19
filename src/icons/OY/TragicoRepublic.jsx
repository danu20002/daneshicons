import React from 'react';

export const iconData = {
  "id": "TragicoRepublic",
  "name": "TragicoRepublic",
  "category": "OY",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.79 16.75 L 15.78 19.46 L 13.33 18.06 L 15.09 15.78 L 17.55 18.46 L 18.72 16.63 L 18.22 18.92 L 20.14 16.39 L 18.89 17.78 L 16.05 15.52 L 13.99 13.82 L 13.36 14.33 L 15.49 15.03 L 13.82 13.06 L 15.50 15.83 L 18.45 13.33 L 17.23 11.11 L 15.95 9.22 L 17.09 6.34 L 14.56 5.42 L 15.72 2.64 L 18.29 2.74 L 20.19 1.00 L 23.00 1.18"
      }
    ]
  ]
};

export const TragicoRepublic = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.79 16.75 L 15.78 19.46 L 13.33 18.06 L 15.09 15.78 L 17.55 18.46 L 18.72 16.63 L 18.22 18.92 L 20.14 16.39 L 18.89 17.78 L 16.05 15.52 L 13.99 13.82 L 13.36 14.33 L 15.49 15.03 L 13.82 13.06 L 15.50 15.83 L 18.45 13.33 L 17.23 11.11 L 15.95 9.22 L 17.09 6.34 L 14.56 5.42 L 15.72 2.64 L 18.29 2.74 L 20.19 1.00 L 23.00 1.18" />
      {children}
    </svg>
  );
});

export default TragicoRepublic;
