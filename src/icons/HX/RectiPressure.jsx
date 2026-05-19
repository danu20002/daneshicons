import React from 'react';

export const iconData = {
  "id": "RectiPressure",
  "name": "RectiPressure",
  "category": "HX",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.93 6.55 L 17.91 11.41 L 21.83 15.58 L 16.15 16.26 L 15.33 21.92 L 11.26 17.90 L 6.32 20.79 L 6.93 15.10 L 1.58 13.04 L 6.42 9.97 L 4.69 4.50 L 10.11 6.37 L 13.31 1.61 L 15.23 7.01 Z"
      }
    ]
  ]
};

export const RectiPressure = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.93 6.55 L 17.91 11.41 L 21.83 15.58 L 16.15 16.26 L 15.33 21.92 L 11.26 17.90 L 6.32 20.79 L 6.93 15.10 L 1.58 13.04 L 6.42 9.97 L 4.69 4.50 L 10.11 6.37 L 13.31 1.61 L 15.23 7.01 Z" />
      {children}
    </svg>
  );
});

export default RectiPressure;
