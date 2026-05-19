import React from 'react';

export const iconData = {
  "id": "YearWeather",
  "name": "YearWeather",
  "category": "AM",
  "nodes": [
    [
      "path",
      {
        "d": "M 14.16 3.79 L 18.03 17.97 L 3.81 14.23 Z"
      }
    ]
  ]
};

export const YearWeather = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 14.16 3.79 L 18.03 17.97 L 3.81 14.23 Z" />
      {children}
    </svg>
  );
});

export default YearWeather;
