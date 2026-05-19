import React from 'react';

export const iconData = {
  "id": "TrypanoScuba",
  "name": "TrypanoScuba",
  "category": "OW",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.34 13.70 L 10.30 21.34 L 2.66 10.30 L 13.70 2.66 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 17.93 13.94 L 10.06 17.93 L 6.07 10.06 L 13.94 6.07 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 14.65 14.26 L 9.74 14.65 L 9.35 9.74 L 14.26 9.35 Z"
      }
    ]
  ]
};

export const TrypanoScuba = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.34 13.70 L 10.30 21.34 L 2.66 10.30 L 13.70 2.66 Z" />
      <path d="M 17.93 13.94 L 10.06 17.93 L 6.07 10.06 L 13.94 6.07 Z" />
      <path d="M 14.65 14.26 L 9.74 14.65 L 9.35 9.74 L 14.26 9.35 Z" />
      {children}
    </svg>
  );
});

export default TrypanoScuba;
