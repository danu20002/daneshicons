import React from 'react';

export const iconData = {
  "id": "DynamoShort",
  "name": "DynamoShort",
  "category": "UU",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.92 11.17 L 11.29 8.67 L 12.33 7.12 L 15.08 7.29 L 15.31 10.21 L 17.52 10.63 L 16.11 8.35 L 16.68 7.31 L 16.95 7.16 L 16.21 5.49 L 13.38 4.38 L 14.91 3.17 L 16.87 3.03 L 16.22 1.71 L 15.09 3.52 L 13.92 1.47 L 11.60 4.31 L 10.44 5.27 L 8.16 2.58"
      }
    ],
    [
      "path",
      {
        "d": "M 20.99 4.32 L 19.61 3.83 L 17.55 6.59 L 14.87 4.71 L 13.11 4.70 L 11.84 2.55 L 13.29 1.00 L 15.29 3.15 L 17.74 4.27 L 15.31 6.17 L 13.03 6.14 L 11.77 8.79 L 13.35 7.79 L 11.09 9.53 L 12.18 12.23 L 12.20 12.24 L 12.81 9.51 L 13.56 8.52 L 15.42 5.66 L 14.26 6.19 L 14.12 6.41 L 14.78 9.03 L 14.10 9.08 L 11.18 9.78 L 12.35 7.93 L 13.36 6.66 L 15.69 6.44 L 17.73 7.85 L 16.03 7.98 L 16.10 7.52 L 17.12 6.02 L 18.74 4.71 L 17.99 6.14 L 15.87 6.06 L 18.26 7.73 L 15.55 7.71"
      }
    ]
  ]
};

export const DynamoShort = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.92 11.17 L 11.29 8.67 L 12.33 7.12 L 15.08 7.29 L 15.31 10.21 L 17.52 10.63 L 16.11 8.35 L 16.68 7.31 L 16.95 7.16 L 16.21 5.49 L 13.38 4.38 L 14.91 3.17 L 16.87 3.03 L 16.22 1.71 L 15.09 3.52 L 13.92 1.47 L 11.60 4.31 L 10.44 5.27 L 8.16 2.58" />
      <path d="M 20.99 4.32 L 19.61 3.83 L 17.55 6.59 L 14.87 4.71 L 13.11 4.70 L 11.84 2.55 L 13.29 1.00 L 15.29 3.15 L 17.74 4.27 L 15.31 6.17 L 13.03 6.14 L 11.77 8.79 L 13.35 7.79 L 11.09 9.53 L 12.18 12.23 L 12.20 12.24 L 12.81 9.51 L 13.56 8.52 L 15.42 5.66 L 14.26 6.19 L 14.12 6.41 L 14.78 9.03 L 14.10 9.08 L 11.18 9.78 L 12.35 7.93 L 13.36 6.66 L 15.69 6.44 L 17.73 7.85 L 16.03 7.98 L 16.10 7.52 L 17.12 6.02 L 18.74 4.71 L 17.99 6.14 L 15.87 6.06 L 18.26 7.73 L 15.55 7.71" />
      {children}
    </svg>
  );
});

export default DynamoShort;
