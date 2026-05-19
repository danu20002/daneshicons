import React from 'react';

export const iconData = {
  "id": "NomoResource",
  "name": "NomoResource",
  "category": "MT",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.46 8.93 L 10.34 7.57 L 12.75 9.53 L 14.01 6.70 L 12.08 4.63 L 11.54 2.02 L 12.35 2.94 L 13.46 1.00 L 14.29 1.24 L 11.41 2.04 L 13.40 3.41 L 11.92 1.55 L 13.67 1.00 L 12.48 1.00 L 14.59 1.44 L 13.40 1.00 L 11.68 1.39 L 10.74 3.63 L 11.10 6.62 L 12.60 7.39 L 12.79 7.51 L 12.63 9.14 L 11.80 8.39 L 8.87 10.00 L 8.68 8.39 L 6.56 10.99 L 3.73 8.66"
      }
    ]
  ]
};

export const NomoResource = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.46 8.93 L 10.34 7.57 L 12.75 9.53 L 14.01 6.70 L 12.08 4.63 L 11.54 2.02 L 12.35 2.94 L 13.46 1.00 L 14.29 1.24 L 11.41 2.04 L 13.40 3.41 L 11.92 1.55 L 13.67 1.00 L 12.48 1.00 L 14.59 1.44 L 13.40 1.00 L 11.68 1.39 L 10.74 3.63 L 11.10 6.62 L 12.60 7.39 L 12.79 7.51 L 12.63 9.14 L 11.80 8.39 L 8.87 10.00 L 8.68 8.39 L 6.56 10.99 L 3.73 8.66" />
      {children}
    </svg>
  );
});

export default NomoResource;
