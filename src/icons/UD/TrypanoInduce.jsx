import React from 'react';

export const iconData = {
  "id": "TrypanoInduce",
  "name": "TrypanoInduce",
  "category": "UD",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.49 5.77 L 19.51 5.77 L 19.51 18.23 L 4.49 18.23 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.49 5.77 L 8.80 1.46 L 23.82 1.46 L 19.51 5.77"
      }
    ],
    [
      "path",
      {
        "d": "M 19.51 5.77 L 23.82 1.46 L 23.82 13.92 L 19.51 18.23"
      }
    ]
  ]
};

export const TrypanoInduce = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.49 5.77 L 19.51 5.77 L 19.51 18.23 L 4.49 18.23 Z" />
      <path d="M 4.49 5.77 L 8.80 1.46 L 23.82 1.46 L 19.51 5.77" />
      <path d="M 19.51 5.77 L 23.82 1.46 L 23.82 13.92 L 19.51 18.23" />
      {children}
    </svg>
  );
});

export default TrypanoInduce;
