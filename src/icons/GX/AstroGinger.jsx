import React from 'react';

export const iconData = {
  "id": "AstroGinger",
  "name": "AstroGinger",
  "category": "GX",
  "nodes": [
    [
      "path",
      {
        "d": "M 17.50 7.43 L 16.71 6.59 L 15.90 3.97 L 14.67 6.59 L 13.86 7.29 L 13.98 9.65 L 14.84 12.44 L 17.11 11.86 L 15.44 12.63 L 17.89 15.17 L 20.15 12.86 L 17.69 11.62 L 17.14 12.04 L 18.24 13.81 L 15.76 16.26 L 17.84 14.75 L 19.34 16.91 L 21.92 15.36 L 22.74 16.24 L 21.89 18.68 L 23.00 18.59 L 20.92 19.73 L 19.54 17.28 L 22.22 14.45 L 20.21 17.10"
      }
    ]
  ]
};

export const AstroGinger = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 17.50 7.43 L 16.71 6.59 L 15.90 3.97 L 14.67 6.59 L 13.86 7.29 L 13.98 9.65 L 14.84 12.44 L 17.11 11.86 L 15.44 12.63 L 17.89 15.17 L 20.15 12.86 L 17.69 11.62 L 17.14 12.04 L 18.24 13.81 L 15.76 16.26 L 17.84 14.75 L 19.34 16.91 L 21.92 15.36 L 22.74 16.24 L 21.89 18.68 L 23.00 18.59 L 20.92 19.73 L 19.54 17.28 L 22.22 14.45 L 20.21 17.10" />
      {children}
    </svg>
  );
});

export default AstroGinger;
