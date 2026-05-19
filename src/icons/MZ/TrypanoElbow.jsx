import React from 'react';

export const iconData = {
  "id": "TrypanoElbow",
  "name": "TrypanoElbow",
  "category": "MZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.06 14.20 L 14.13 20.08 L 6.07 17.88 L 3.94 9.80 L 9.87 3.92 L 17.93 6.12 Z"
      }
    ]
  ]
};

export const TrypanoElbow = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.06 14.20 L 14.13 20.08 L 6.07 17.88 L 3.94 9.80 L 9.87 3.92 L 17.93 6.12 Z" />
      {children}
    </svg>
  );
});

export default TrypanoElbow;
