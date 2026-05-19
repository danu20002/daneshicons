import React from 'react';

export const iconData = {
  "id": "PulmoExact",
  "name": "PulmoExact",
  "category": "NM",
  "nodes": [
    [
      "path",
      {
        "d": "M 16.16 18.82 L 16.29 16.75 L 17.92 18.38 L 14.95 16.76 L 17.17 14.41 L 17.56 11.60 L 16.80 13.52 L 15.44 15.87 L 15.44 13.38 L 16.84 11.88 L 14.95 11.14 L 15.97 8.26 L 14.79 9.86 L 14.58 9.13 L 15.22 7.36 L 14.66 5.10 L 17.54 6.21 L 15.32 8.78 L 16.48 7.53 L 15.89 8.49 L 14.63 8.58 L 13.74 7.90 L 12.58 6.46 L 12.30 7.01 L 13.00 5.98 L 10.08 4.58 L 10.89 7.13"
      }
    ]
  ]
};

export const PulmoExact = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 16.16 18.82 L 16.29 16.75 L 17.92 18.38 L 14.95 16.76 L 17.17 14.41 L 17.56 11.60 L 16.80 13.52 L 15.44 15.87 L 15.44 13.38 L 16.84 11.88 L 14.95 11.14 L 15.97 8.26 L 14.79 9.86 L 14.58 9.13 L 15.22 7.36 L 14.66 5.10 L 17.54 6.21 L 15.32 8.78 L 16.48 7.53 L 15.89 8.49 L 14.63 8.58 L 13.74 7.90 L 12.58 6.46 L 12.30 7.01 L 13.00 5.98 L 10.08 4.58 L 10.89 7.13" />
      {children}
    </svg>
  );
});

export default PulmoExact;
