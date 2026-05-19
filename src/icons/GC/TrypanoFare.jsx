import React from 'react';

export const iconData = {
  "id": "TrypanoFare",
  "name": "TrypanoFare",
  "category": "GC",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.34 13.83 5.40 11.44 Q 4.86 8.85 4.32 6.27 Q 6.83 5.87 9.34 5.47 Q 11.64 6.45 13.94 7.44 Q 16.49 7.63 19.04 7.82 Q 19.05 13.08 19.07 18.34 Q 15.74 15.96 12.42 13.58 Q 7.84 14.90 3.27 16.22 Z"
      }
    ]
  ]
};

export const TrypanoFare = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.34 13.83 5.40 11.44 Q 4.86 8.85 4.32 6.27 Q 6.83 5.87 9.34 5.47 Q 11.64 6.45 13.94 7.44 Q 16.49 7.63 19.04 7.82 Q 19.05 13.08 19.07 18.34 Q 15.74 15.96 12.42 13.58 Q 7.84 14.90 3.27 16.22 Z" />
      {children}
    </svg>
  );
});

export default TrypanoFare;
