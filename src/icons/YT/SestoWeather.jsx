import React from 'react';

export const iconData = {
  "id": "SestoWeather",
  "name": "SestoWeather",
  "category": "YT",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.61 1.18 L 16.05 7.65 L 22.82 11.61 L 16.35 16.05 L 12.39 22.82 L 7.95 16.35 L 1.18 12.39 L 7.65 7.95 Z"
      }
    ]
  ]
};

export const SestoWeather = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.61 1.18 L 16.05 7.65 L 22.82 11.61 L 16.35 16.05 L 12.39 22.82 L 7.95 16.35 L 1.18 12.39 L 7.65 7.95 Z" />
      {children}
    </svg>
  );
});

export default SestoWeather;
