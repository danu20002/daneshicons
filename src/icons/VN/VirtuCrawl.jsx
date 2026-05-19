import React from 'react';

export const iconData = {
  "id": "VirtuCrawl",
  "name": "VirtuCrawl",
  "category": "VN",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.49 13.11 L 7.49 15.88 L 8.71 18.52 L 11.64 20.79 L 14.05 22.44 L 11.38 21.23 L 10.26 23.00 L 13.11 23.00 L 15.60 23.00 L 16.17 20.25 L 15.69 19.41 L 14.97 17.67 L 13.55 20.48 L 15.28 21.64 L 16.36 22.35 L 15.45 22.68 L 16.00 21.68 L 13.73 19.47 L 12.08 17.77"
      }
    ],
    [
      "path",
      {
        "d": "M 11.39 18.06 L 9.15 19.34 L 7.23 19.13 L 4.23 16.30 L 4.79 18.46 L 5.90 16.32 L 5.10 16.18 L 3.93 17.33 L 1.22 17.04 L 2.62 16.71 L 4.68 16.75 L 6.12 17.69 L 6.21 20.63 L 6.55 22.16 L 6.35 19.53 L 6.82 18.38 L 5.23 17.02 L 6.87 17.23 L 6.48 18.94 L 4.93 16.83 L 2.90 18.91 L 1.00 21.89 L 1.07 23.00 L 1.00 20.54 L 3.14 18.06"
      }
    ]
  ]
};

export const VirtuCrawl = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.49 13.11 L 7.49 15.88 L 8.71 18.52 L 11.64 20.79 L 14.05 22.44 L 11.38 21.23 L 10.26 23.00 L 13.11 23.00 L 15.60 23.00 L 16.17 20.25 L 15.69 19.41 L 14.97 17.67 L 13.55 20.48 L 15.28 21.64 L 16.36 22.35 L 15.45 22.68 L 16.00 21.68 L 13.73 19.47 L 12.08 17.77" />
      <path d="M 11.39 18.06 L 9.15 19.34 L 7.23 19.13 L 4.23 16.30 L 4.79 18.46 L 5.90 16.32 L 5.10 16.18 L 3.93 17.33 L 1.22 17.04 L 2.62 16.71 L 4.68 16.75 L 6.12 17.69 L 6.21 20.63 L 6.55 22.16 L 6.35 19.53 L 6.82 18.38 L 5.23 17.02 L 6.87 17.23 L 6.48 18.94 L 4.93 16.83 L 2.90 18.91 L 1.00 21.89 L 1.07 23.00 L 1.00 20.54 L 3.14 18.06" />
      {children}
    </svg>
  );
});

export default VirtuCrawl;
