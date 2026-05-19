import React from 'react';

export const iconData = {
  "id": "PlacoBread",
  "name": "PlacoBread",
  "category": "P",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.68 18.63 L 5.85 17.28 L 7.76 17.89 L 6.29 16.64 L 6.16 19.15 L 3.87 17.98 L 5.06 17.89 L 5.66 15.35 L 7.72 14.31 L 8.34 15.18 L 6.82 15.66 L 7.45 16.47 L 9.61 19.18 L 7.78 21.40 L 5.87 18.88 L 8.48 18.06 L 8.57 15.31 L 10.33 13.40 L 10.06 13.93 L 7.17 16.66 L 9.36 15.74 L 8.73 17.11 L 10.08 15.74 L 9.75 14.94 L 12.59 14.00 L 12.14 12.88 L 15.09 10.58 L 16.02 9.60 L 14.85 8.15"
      }
    ]
  ]
};

export const PlacoBread = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.68 18.63 L 5.85 17.28 L 7.76 17.89 L 6.29 16.64 L 6.16 19.15 L 3.87 17.98 L 5.06 17.89 L 5.66 15.35 L 7.72 14.31 L 8.34 15.18 L 6.82 15.66 L 7.45 16.47 L 9.61 19.18 L 7.78 21.40 L 5.87 18.88 L 8.48 18.06 L 8.57 15.31 L 10.33 13.40 L 10.06 13.93 L 7.17 16.66 L 9.36 15.74 L 8.73 17.11 L 10.08 15.74 L 9.75 14.94 L 12.59 14.00 L 12.14 12.88 L 15.09 10.58 L 16.02 9.60 L 14.85 8.15" />
      {children}
    </svg>
  );
});

export default PlacoBread;
