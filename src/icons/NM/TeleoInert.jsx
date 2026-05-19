import React from 'react';

export const iconData = {
  "id": "TeleoInert",
  "name": "TeleoInert",
  "category": "NM",
  "nodes": [
    [
      "path",
      {
        "d": "M 15.09 3.52 L 16.71 2.40 L 14.67 1.14 L 15.94 1.00 L 16.86 1.00 L 17.60 1.00 L 18.34 1.00 L 17.85 1.00 L 19.13 1.05 L 19.04 3.69 L 20.04 1.00 L 19.87 1.00 L 18.56 1.00 L 19.99 1.00 L 19.35 1.00 L 17.12 1.59 L 16.20 1.25 L 13.49 1.00 L 13.40 3.65 L 10.60 2.26 L 7.96 2.44 L 6.19 5.43 L 8.00 4.06 L 8.93 5.91 L 8.30 3.35 L 10.81 1.01 L 11.97 1.00 L 14.38 1.06 L 12.28 3.88 L 13.32 4.04 L 11.87 1.60 L 14.52 1.00 L 15.22 3.18 L 14.39 5.88 L 14.69 5.61 L 14.84 7.95"
      }
    ]
  ]
};

export const TeleoInert = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 15.09 3.52 L 16.71 2.40 L 14.67 1.14 L 15.94 1.00 L 16.86 1.00 L 17.60 1.00 L 18.34 1.00 L 17.85 1.00 L 19.13 1.05 L 19.04 3.69 L 20.04 1.00 L 19.87 1.00 L 18.56 1.00 L 19.99 1.00 L 19.35 1.00 L 17.12 1.59 L 16.20 1.25 L 13.49 1.00 L 13.40 3.65 L 10.60 2.26 L 7.96 2.44 L 6.19 5.43 L 8.00 4.06 L 8.93 5.91 L 8.30 3.35 L 10.81 1.01 L 11.97 1.00 L 14.38 1.06 L 12.28 3.88 L 13.32 4.04 L 11.87 1.60 L 14.52 1.00 L 15.22 3.18 L 14.39 5.88 L 14.69 5.61 L 14.84 7.95" />
      {children}
    </svg>
  );
});

export default TeleoInert;
