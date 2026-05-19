import React from 'react';

export const iconData = {
  "id": "TechnoVocation",
  "name": "TechnoVocation",
  "category": "SL",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.25 9.93 L 10.25 9.93"
      }
    ],
    [
      "path",
      {
        "d": "M 12.19 5.90 L 13.43 9.70"
      }
    ],
    [
      "path",
      {
        "d": "M 17.87 10.30 L 14.63 12.65"
      }
    ],
    [
      "path",
      {
        "d": "M 15.43 17.05 L 12.20 14.70"
      }
    ],
    [
      "path",
      {
        "d": "M 8.26 16.82 L 9.49 13.02"
      }
    ]
  ]
};

export const TechnoVocation = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.25 9.93 L 10.25 9.93" />
      <path d="M 12.19 5.90 L 13.43 9.70" />
      <path d="M 17.87 10.30 L 14.63 12.65" />
      <path d="M 15.43 17.05 L 12.20 14.70" />
      <path d="M 8.26 16.82 L 9.49 13.02" />
      {children}
    </svg>
  );
});

export default TechnoVocation;
