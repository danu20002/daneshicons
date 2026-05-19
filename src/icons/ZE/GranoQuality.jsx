import React from 'react';

export const iconData = {
  "id": "GranoQuality",
  "name": "GranoQuality",
  "category": "ZE",
  "nodes": [
    [
      "path",
      {
        "d": "M 18.93 7.84 L 21.03 10.42 L 19.06 8.62 L 18.73 8.82 L 19.43 9.78 L 18.24 9.32 L 19.09 7.65 L 16.69 6.07 L 18.38 7.72 L 17.83 4.82 L 15.11 7.47 L 14.95 5.93 L 16.03 4.80 L 14.44 5.73 L 12.75 3.51 L 13.66 5.35 L 12.36 7.72 L 13.78 6.35 L 13.89 4.50 L 15.87 2.36 L 17.75 3.37 L 20.71 4.73 L 22.49 7.04 L 23.00 6.96 L 23.00 9.08 L 21.47 6.78 L 19.17 8.70 L 21.90 11.54 L 21.48 14.27 L 23.00 12.34 L 23.00 10.02 L 21.74 8.10 L 18.76 7.01 L 21.76 9.96"
      }
    ]
  ]
};

export const GranoQuality = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 18.93 7.84 L 21.03 10.42 L 19.06 8.62 L 18.73 8.82 L 19.43 9.78 L 18.24 9.32 L 19.09 7.65 L 16.69 6.07 L 18.38 7.72 L 17.83 4.82 L 15.11 7.47 L 14.95 5.93 L 16.03 4.80 L 14.44 5.73 L 12.75 3.51 L 13.66 5.35 L 12.36 7.72 L 13.78 6.35 L 13.89 4.50 L 15.87 2.36 L 17.75 3.37 L 20.71 4.73 L 22.49 7.04 L 23.00 6.96 L 23.00 9.08 L 21.47 6.78 L 19.17 8.70 L 21.90 11.54 L 21.48 14.27 L 23.00 12.34 L 23.00 10.02 L 21.74 8.10 L 18.76 7.01 L 21.76 9.96" />
      {children}
    </svg>
  );
});

export default GranoQuality;
