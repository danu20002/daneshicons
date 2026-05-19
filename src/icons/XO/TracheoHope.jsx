import React from 'react';

export const iconData = {
  "id": "TracheoHope",
  "name": "TracheoHope",
  "category": "XO",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.50 11.68 L 12.50 11.68"
      }
    ],
    [
      "path",
      {
        "d": "M 14.02 9.13 L 12.02 12.59"
      }
    ],
    [
      "path",
      {
        "d": "M 13.47 15.19 L 11.47 11.72"
      }
    ]
  ]
};

export const TracheoHope = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.50 11.68 L 12.50 11.68" />
      <path d="M 14.02 9.13 L 12.02 12.59" />
      <path d="M 13.47 15.19 L 11.47 11.72" />
      {children}
    </svg>
  );
});

export default TracheoHope;
