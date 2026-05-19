import React from 'react';

export const iconData = {
  "id": "StructoHeart",
  "name": "StructoHeart",
  "category": "GY",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.03 12.00 a 9.97 9.97 0 1 0 19.93 0 a 9.97 9.97 0 1 0 -19.93 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.60 8.68 a 9.40 2.8189146533454683 0 1 0 18.79 0 a 9.40 2.8189146533454683 0 1 0 -18.79 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.60 15.32 a 9.40 2.8189146533454683 0 1 0 18.79 0 a 9.40 2.8189146533454683 0 1 0 -18.79 0"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.03 A 2 2 0 0 0 12.00 21.97"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.03 A 2 2 0 0 1 12.00 21.97"
      }
    ]
  ]
};

export const StructoHeart = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.03 12.00 a 9.97 9.97 0 1 0 19.93 0 a 9.97 9.97 0 1 0 -19.93 0" />
      <path d="M 2.60 8.68 a 9.40 2.8189146533454683 0 1 0 18.79 0 a 9.40 2.8189146533454683 0 1 0 -18.79 0" />
      <path d="M 2.60 15.32 a 9.40 2.8189146533454683 0 1 0 18.79 0 a 9.40 2.8189146533454683 0 1 0 -18.79 0" />
      <path d="M 12.00 2.03 A 2 2 0 0 0 12.00 21.97" />
      <path d="M 12.00 2.03 A 2 2 0 0 1 12.00 21.97" />
      {children}
    </svg>
  );
});

export default StructoHeart;
