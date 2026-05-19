import React from 'react';

export const iconData = {
  "id": "FastoWeather",
  "name": "FastoWeather",
  "category": "CT",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.26 14.04 L 16.18 20.51 L 7.95 20.58 L 2.77 14.19 L 4.54 6.15 L 11.92 2.51 L 19.37 6.03 Z"
      }
    ]
  ]
};

export const FastoWeather = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.26 14.04 L 16.18 20.51 L 7.95 20.58 L 2.77 14.19 L 4.54 6.15 L 11.92 2.51 L 19.37 6.03 Z" />
      {children}
    </svg>
  );
});

export default FastoWeather;
