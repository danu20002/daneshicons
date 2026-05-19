import React from 'react';

export const iconData = {
  "id": "TympanRoad",
  "name": "TympanRoad",
  "category": "EO",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.82 12.00 L 18.18 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 5.82 L 12.00 18.18"
      }
    ],
    [
      "path",
      {
        "d": "M 2.13 12.00 a 9.87 9.87 0 1 0 19.73 0 a 9.87 9.87 0 1 0 -19.73 0"
      }
    ]
  ]
};

export const TympanRoad = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.82 12.00 L 18.18 12.00" />
      <path d="M 12.00 5.82 L 12.00 18.18" />
      <path d="M 2.13 12.00 a 9.87 9.87 0 1 0 19.73 0 a 9.87 9.87 0 1 0 -19.73 0" />
      {children}
    </svg>
  );
});

export default TympanRoad;
