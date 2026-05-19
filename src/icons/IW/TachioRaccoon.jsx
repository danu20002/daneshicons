import React from 'react';

export const iconData = {
  "id": "TachioRaccoon",
  "name": "TachioRaccoon",
  "category": "IW",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.00 6.79 L 2.50 8.69 L 3.00 10.17 L 3.50 10.92 L 4.00 10.76 L 4.50 9.74 L 5.00 8.08 L 5.50 6.14 L 6.00 4.34 L 6.50 3.08 L 7.00 2.62 L 7.50 3.08 L 8.00 4.34 L 8.50 6.14 L 9.00 8.08 L 9.50 9.74 L 10.00 10.76 L 10.50 10.92 L 11.00 10.17 L 11.50 8.69 L 12.00 6.79 L 12.50 4.90 L 13.00 3.42 L 13.50 2.67 L 14.00 2.83 L 14.50 3.84 L 15.00 5.51 L 15.50 7.45 L 16.00 9.25 L 16.50 10.51 L 17.00 10.97 L 17.50 10.51 L 18.00 9.25 L 18.50 7.45 L 19.00 5.51 L 19.50 3.84 L 20.00 2.83 L 20.50 2.67 L 21.00 3.42 L 21.50 4.90 L 22.00 6.79"
      }
    ]
  ]
};

export const TachioRaccoon = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.00 6.79 L 2.50 8.69 L 3.00 10.17 L 3.50 10.92 L 4.00 10.76 L 4.50 9.74 L 5.00 8.08 L 5.50 6.14 L 6.00 4.34 L 6.50 3.08 L 7.00 2.62 L 7.50 3.08 L 8.00 4.34 L 8.50 6.14 L 9.00 8.08 L 9.50 9.74 L 10.00 10.76 L 10.50 10.92 L 11.00 10.17 L 11.50 8.69 L 12.00 6.79 L 12.50 4.90 L 13.00 3.42 L 13.50 2.67 L 14.00 2.83 L 14.50 3.84 L 15.00 5.51 L 15.50 7.45 L 16.00 9.25 L 16.50 10.51 L 17.00 10.97 L 17.50 10.51 L 18.00 9.25 L 18.50 7.45 L 19.00 5.51 L 19.50 3.84 L 20.00 2.83 L 20.50 2.67 L 21.00 3.42 L 21.50 4.90 L 22.00 6.79" />
      {children}
    </svg>
  );
});

export default TachioRaccoon;
