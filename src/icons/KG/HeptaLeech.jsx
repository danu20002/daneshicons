import React from 'react';

export const iconData = {
  "id": "HeptaLeech",
  "name": "HeptaLeech",
  "category": "KG",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.80 5.57 C 7.60 11.49, 18.34 9.37, 16.11 21.35"
      }
    ],
    [
      "path",
      {
        "d": "M 5.19 3.71 C 14.33 12.30, 14.00 7.59, 17.60 19.38"
      }
    ],
    [
      "path",
      {
        "d": "M 7.63 9.45 C 18.28 8.42, 11.53 7.26, 20.08 16.82"
      }
    ]
  ]
};

export const HeptaLeech = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.80 5.57 C 7.60 11.49, 18.34 9.37, 16.11 21.35" />
      <path d="M 5.19 3.71 C 14.33 12.30, 14.00 7.59, 17.60 19.38" />
      <path d="M 7.63 9.45 C 18.28 8.42, 11.53 7.26, 20.08 16.82" />
      {children}
    </svg>
  );
});

export default HeptaLeech;
