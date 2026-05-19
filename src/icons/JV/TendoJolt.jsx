import React from 'react';

export const iconData = {
  "id": "TendoJolt",
  "name": "TendoJolt",
  "category": "JV",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.78 12.49 L 10.79 11.55 L 9.92 12.72 L 8.09 11.35 L 8.19 13.29 L 10.61 12.91 L 11.23 12.78 L 10.24 12.71 L 8.71 11.91 L 7.37 13.99 L 7.33 12.30 L 6.08 10.00 L 8.55 10.61 L 5.90 11.95 L 7.91 10.71 L 5.10 11.65 L 2.43 12.85 L 1.80 15.56 L 1.00 14.94 L 1.99 15.37"
      }
    ]
  ]
};

export const TendoJolt = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.78 12.49 L 10.79 11.55 L 9.92 12.72 L 8.09 11.35 L 8.19 13.29 L 10.61 12.91 L 11.23 12.78 L 10.24 12.71 L 8.71 11.91 L 7.37 13.99 L 7.33 12.30 L 6.08 10.00 L 8.55 10.61 L 5.90 11.95 L 7.91 10.71 L 5.10 11.65 L 2.43 12.85 L 1.80 15.56 L 1.00 14.94 L 1.99 15.37" />
      {children}
    </svg>
  );
});

export default TendoJolt;
