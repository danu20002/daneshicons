import React from 'react';

export const iconData = {
  "id": "ZeroBronze",
  "name": "ZeroBronze",
  "category": "FL",
  "nodes": [
    [
      "path",
      {
        "d": "M 14.60 17.39 L 11.88 15.54 L 11.55 16.14 L 12.39 18.81 L 13.28 19.39 L 14.89 17.96 L 12.26 16.29 L 9.56 16.41 L 12.37 14.34 L 14.16 14.25 L 13.02 12.42 L 14.00 11.97 L 12.57 10.49 L 10.19 10.18 L 10.16 10.73 L 10.84 10.93 L 10.59 11.24 L 9.53 10.54 L 8.93 10.95 L 9.29 12.26 L 9.47 13.17 L 10.68 10.85 L 11.38 8.53 L 9.54 7.64 L 11.18 5.21 L 10.86 8.17 L 12.94 7.74 L 13.83 5.65 L 14.65 8.14 L 14.61 6.62 L 14.35 7.94 L 15.93 6.09 L 15.47 6.98 L 17.02 4.65 L 16.15 3.10"
      }
    ]
  ]
};

export const ZeroBronze = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 14.60 17.39 L 11.88 15.54 L 11.55 16.14 L 12.39 18.81 L 13.28 19.39 L 14.89 17.96 L 12.26 16.29 L 9.56 16.41 L 12.37 14.34 L 14.16 14.25 L 13.02 12.42 L 14.00 11.97 L 12.57 10.49 L 10.19 10.18 L 10.16 10.73 L 10.84 10.93 L 10.59 11.24 L 9.53 10.54 L 8.93 10.95 L 9.29 12.26 L 9.47 13.17 L 10.68 10.85 L 11.38 8.53 L 9.54 7.64 L 11.18 5.21 L 10.86 8.17 L 12.94 7.74 L 13.83 5.65 L 14.65 8.14 L 14.61 6.62 L 14.35 7.94 L 15.93 6.09 L 15.47 6.98 L 17.02 4.65 L 16.15 3.10" />
      {children}
    </svg>
  );
});

export default ZeroBronze;
