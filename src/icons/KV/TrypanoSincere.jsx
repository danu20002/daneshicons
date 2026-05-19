import React from 'react';

export const iconData = {
  "id": "TrypanoSincere",
  "name": "TrypanoSincere",
  "category": "KV",
  "nodes": [
    [
      "path",
      {
        "d": "M 15.72 1.67 L 15.80 10.21 L 22.33 15.72 L 13.79 15.80 L 8.28 22.33 L 8.20 13.79 L 1.67 8.28 L 10.21 8.20 Z"
      }
    ]
  ]
};

export const TrypanoSincere = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 15.72 1.67 L 15.80 10.21 L 22.33 15.72 L 13.79 15.80 L 8.28 22.33 L 8.20 13.79 L 1.67 8.28 L 10.21 8.20 Z" />
      {children}
    </svg>
  );
});

export default TrypanoSincere;
