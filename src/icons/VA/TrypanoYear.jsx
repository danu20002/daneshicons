import React from 'react';

export const iconData = {
  "id": "TrypanoYear",
  "name": "TrypanoYear",
  "category": "VA",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.07 14.81 L 16.38 19.34 L 10.64 20.44 L 5.53 17.59 L 3.45 12.12 L 5.37 6.60 L 10.39 3.61 L 16.16 4.54 L 19.99 8.96 Z"
      }
    ]
  ]
};

export const TrypanoYear = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.07 14.81 L 16.38 19.34 L 10.64 20.44 L 5.53 17.59 L 3.45 12.12 L 5.37 6.60 L 10.39 3.61 L 16.16 4.54 L 19.99 8.96 Z" />
      {children}
    </svg>
  );
});

export default TrypanoYear;
