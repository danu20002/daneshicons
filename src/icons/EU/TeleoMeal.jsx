import React from 'react';

export const iconData = {
  "id": "TeleoMeal",
  "name": "TeleoMeal",
  "category": "EU",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.30 6.40 L 20.70 6.40 L 20.70 17.60 L 3.30 17.60 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.30 6.40 L 6.36 3.34 L 23.75 3.34 L 20.70 6.40"
      }
    ],
    [
      "path",
      {
        "d": "M 20.70 6.40 L 23.75 3.34 L 23.75 14.55 L 20.70 17.60"
      }
    ]
  ]
};

export const TeleoMeal = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.30 6.40 L 20.70 6.40 L 20.70 17.60 L 3.30 17.60 Z" />
      <path d="M 3.30 6.40 L 6.36 3.34 L 23.75 3.34 L 20.70 6.40" />
      <path d="M 20.70 6.40 L 23.75 3.34 L 23.75 14.55 L 20.70 17.60" />
      {children}
    </svg>
  );
});

export default TeleoMeal;
