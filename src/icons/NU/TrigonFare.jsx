import React from 'react';

export const iconData = {
  "id": "TrigonFare",
  "name": "TrigonFare",
  "category": "NU",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.08 9.48 L 15.25 12.84 L 18.73 18.60 L 12.90 15.23 L 9.65 21.13 L 9.65 14.39 L 2.92 14.52 L 8.75 11.16 L 5.27 5.40 L 11.10 8.77 L 14.35 2.87 L 14.35 9.61 Z"
      }
    ]
  ]
};

export const TrigonFare = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.08 9.48 L 15.25 12.84 L 18.73 18.60 L 12.90 15.23 L 9.65 21.13 L 9.65 14.39 L 2.92 14.52 L 8.75 11.16 L 5.27 5.40 L 11.10 8.77 L 14.35 2.87 L 14.35 9.61 Z" />
      {children}
    </svg>
  );
});

export default TrigonFare;
