import React from 'react';

export const iconData = {
  "id": "TerbioJut",
  "name": "TerbioJut",
  "category": "XS",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.44 14.79 L 9.65 12.11 L 10.42 10.39 L 13.01 9.73 L 11.28 11.05 L 12.82 10.08 L 14.85 12.38 L 13.03 13.28 L 10.07 14.00 L 7.35 16.26 L 7.59 17.12 L 7.59 19.28 L 6.05 18.33 L 4.76 19.74 L 2.99 20.19 L 5.35 18.93 L 7.71 17.33 L 7.27 16.92 L 7.88 18.09 L 5.43 16.20 L 5.52 13.94 L 8.02 16.04 L 10.12 15.15 L 8.61 12.30 L 10.77 11.93 L 13.59 11.69 L 14.75 10.74 L 15.50 8.53 L 16.67 9.80 L 18.21 9.61 L 16.25 10.44 L 15.43 10.35"
      }
    ]
  ]
};

export const TerbioJut = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.44 14.79 L 9.65 12.11 L 10.42 10.39 L 13.01 9.73 L 11.28 11.05 L 12.82 10.08 L 14.85 12.38 L 13.03 13.28 L 10.07 14.00 L 7.35 16.26 L 7.59 17.12 L 7.59 19.28 L 6.05 18.33 L 4.76 19.74 L 2.99 20.19 L 5.35 18.93 L 7.71 17.33 L 7.27 16.92 L 7.88 18.09 L 5.43 16.20 L 5.52 13.94 L 8.02 16.04 L 10.12 15.15 L 8.61 12.30 L 10.77 11.93 L 13.59 11.69 L 14.75 10.74 L 15.50 8.53 L 16.67 9.80 L 18.21 9.61 L 16.25 10.44 L 15.43 10.35" />
      {children}
    </svg>
  );
});

export default TerbioJut;
