import React from 'react';

export const iconData = {
  "id": "TritticoLame",
  "name": "TritticoLame",
  "category": "PR",
  "nodes": [
    [
      "path",
      {
        "d": "M 17.35 9.99 L 17.62 8.70 L 18.00 7.90 L 15.43 8.34 L 16.92 9.82 L 16.13 10.57 L 16.89 10.90 L 16.28 8.94 L 18.87 11.58 L 16.99 14.34 L 14.21 14.41 L 11.41 12.53 L 10.28 12.75 L 8.97 13.44 L 7.25 13.09 L 10.10 11.97 L 8.47 13.56 L 8.24 13.02 L 6.41 10.32 L 6.72 10.80"
      }
    ],
    [
      "path",
      {
        "d": "M 15.73 6.62 L 17.12 7.63 L 18.26 5.75 L 18.35 4.75 L 16.41 3.13 L 15.87 3.67 L 18.24 2.55 L 17.56 1.59 L 16.93 3.59 L 15.64 6.35 L 14.11 9.19 L 14.91 7.16 L 14.69 5.44 L 12.45 3.53 L 9.57 4.49 L 10.99 4.19 L 11.20 1.52 L 13.62 2.96 L 11.76 1.99 L 14.29 1.00 L 12.01 1.00 L 14.56 3.40 L 15.47 1.43"
      }
    ]
  ]
};

export const TritticoLame = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 17.35 9.99 L 17.62 8.70 L 18.00 7.90 L 15.43 8.34 L 16.92 9.82 L 16.13 10.57 L 16.89 10.90 L 16.28 8.94 L 18.87 11.58 L 16.99 14.34 L 14.21 14.41 L 11.41 12.53 L 10.28 12.75 L 8.97 13.44 L 7.25 13.09 L 10.10 11.97 L 8.47 13.56 L 8.24 13.02 L 6.41 10.32 L 6.72 10.80" />
      <path d="M 15.73 6.62 L 17.12 7.63 L 18.26 5.75 L 18.35 4.75 L 16.41 3.13 L 15.87 3.67 L 18.24 2.55 L 17.56 1.59 L 16.93 3.59 L 15.64 6.35 L 14.11 9.19 L 14.91 7.16 L 14.69 5.44 L 12.45 3.53 L 9.57 4.49 L 10.99 4.19 L 11.20 1.52 L 13.62 2.96 L 11.76 1.99 L 14.29 1.00 L 12.01 1.00 L 14.56 3.40 L 15.47 1.43" />
      {children}
    </svg>
  );
});

export default TritticoLame;
