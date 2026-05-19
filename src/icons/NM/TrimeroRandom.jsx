import React from 'react';

export const iconData = {
  "id": "TrimeroRandom",
  "name": "TrimeroRandom",
  "category": "NM",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.90 4.60 L 7.14 6.44 L 4.71 6.14 L 4.99 6.35 L 7.85 3.50 L 9.57 6.19 L 12.40 6.63 L 13.94 8.22 L 15.56 10.32 L 16.23 9.36 L 18.78 10.58 L 17.97 11.69 L 19.88 9.87 L 19.33 11.55 L 20.15 13.71 L 20.77 13.68 L 21.19 14.40 L 20.37 13.19 L 19.05 10.60 L 19.34 11.67 L 21.32 11.02 L 21.67 9.60 L 18.94 11.92 L 16.39 12.85 L 14.65 15.24 L 14.65 15.93 L 15.95 15.23 L 13.99 15.38 L 11.43 18.21 L 11.56 20.29 L 9.84 19.19 L 10.47 19.39"
      }
    ]
  ]
};

export const TrimeroRandom = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.90 4.60 L 7.14 6.44 L 4.71 6.14 L 4.99 6.35 L 7.85 3.50 L 9.57 6.19 L 12.40 6.63 L 13.94 8.22 L 15.56 10.32 L 16.23 9.36 L 18.78 10.58 L 17.97 11.69 L 19.88 9.87 L 19.33 11.55 L 20.15 13.71 L 20.77 13.68 L 21.19 14.40 L 20.37 13.19 L 19.05 10.60 L 19.34 11.67 L 21.32 11.02 L 21.67 9.60 L 18.94 11.92 L 16.39 12.85 L 14.65 15.24 L 14.65 15.93 L 15.95 15.23 L 13.99 15.38 L 11.43 18.21 L 11.56 20.29 L 9.84 19.19 L 10.47 19.39" />
      {children}
    </svg>
  );
});

export default TrimeroRandom;
