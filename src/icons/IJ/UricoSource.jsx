import React from 'react';

export const iconData = {
  "id": "UricoSource",
  "name": "UricoSource",
  "category": "IJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.62 14.74 L 8.03 17.23 L 6.01 15.28 L 3.54 12.90 L 5.65 11.19 L 3.61 12.73 L 3.34 15.63 L 1.00 13.50 L 2.07 14.08 L 3.63 16.71 L 1.40 17.09 L 2.39 19.53 L 1.00 20.10 L 1.00 21.05 L 3.64 18.72 L 3.21 18.46 L 5.19 21.36 L 4.17 21.75 L 6.32 19.44 L 8.58 18.28"
      }
    ]
  ]
};

export const UricoSource = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.62 14.74 L 8.03 17.23 L 6.01 15.28 L 3.54 12.90 L 5.65 11.19 L 3.61 12.73 L 3.34 15.63 L 1.00 13.50 L 2.07 14.08 L 3.63 16.71 L 1.40 17.09 L 2.39 19.53 L 1.00 20.10 L 1.00 21.05 L 3.64 18.72 L 3.21 18.46 L 5.19 21.36 L 4.17 21.75 L 6.32 19.44 L 8.58 18.28" />
      {children}
    </svg>
  );
});

export default UricoSource;
