import React from 'react';

export const iconData = {
  "id": "OmniLibrary",
  "name": "OmniLibrary",
  "category": "GX",
  "nodes": [
    [
      "path",
      {
        "d": "M 15.47 8.99 L 14.91 11.35 L 16.51 10.69 L 14.07 13.11 L 12.29 11.01 L 10.02 10.00 L 7.19 7.15 L 4.40 8.05 L 3.90 6.60 L 1.84 9.41 L 2.63 7.77 L 1.00 4.92 L 2.98 4.09 L 2.70 4.80 L 1.00 7.28 L 1.00 5.56 L 1.66 7.86"
      }
    ],
    [
      "path",
      {
        "d": "M 14.99 5.63 L 17.82 7.46 L 18.14 9.97 L 18.70 9.28 L 16.78 8.85 L 16.05 8.57 L 14.66 10.23 L 13.41 9.45 L 11.62 7.98 L 12.52 10.91 L 11.59 12.71 L 11.03 14.28 L 10.76 13.06 L 8.58 10.36 L 7.90 13.21 L 9.17 13.68 L 11.45 14.43 L 9.52 16.35 L 8.14 15.93 L 7.46 15.08 L 5.87 13.01 L 6.83 11.46 L 6.37 14.08 L 8.63 16.94 L 9.76 19.58 L 11.17 20.63"
      }
    ]
  ]
};

export const OmniLibrary = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 15.47 8.99 L 14.91 11.35 L 16.51 10.69 L 14.07 13.11 L 12.29 11.01 L 10.02 10.00 L 7.19 7.15 L 4.40 8.05 L 3.90 6.60 L 1.84 9.41 L 2.63 7.77 L 1.00 4.92 L 2.98 4.09 L 2.70 4.80 L 1.00 7.28 L 1.00 5.56 L 1.66 7.86" />
      <path d="M 14.99 5.63 L 17.82 7.46 L 18.14 9.97 L 18.70 9.28 L 16.78 8.85 L 16.05 8.57 L 14.66 10.23 L 13.41 9.45 L 11.62 7.98 L 12.52 10.91 L 11.59 12.71 L 11.03 14.28 L 10.76 13.06 L 8.58 10.36 L 7.90 13.21 L 9.17 13.68 L 11.45 14.43 L 9.52 16.35 L 8.14 15.93 L 7.46 15.08 L 5.87 13.01 L 6.83 11.46 L 6.37 14.08 L 8.63 16.94 L 9.76 19.58 L 11.17 20.63" />
      {children}
    </svg>
  );
});

export default OmniLibrary;
