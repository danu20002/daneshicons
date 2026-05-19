import React from 'react';

export const iconData = {
  "id": "GeoPurple",
  "name": "GeoPurple",
  "category": "TF",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.60 21.16 C 4.10 19.87, 21.92 10.00, 12.42 16.62"
      }
    ],
    [
      "path",
      {
        "d": "M 11.89 11.61 A 2.19 6.45 25 0 1 7.46 10.45"
      }
    ],
    [
      "path",
      {
        "d": "M 11.69 9.65 L 18.91 9.48 L 19.80 12.52 L 7.75 12.38 L 17.41 3.23"
      }
    ]
  ]
};

export const GeoPurple = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.60 21.16 C 4.10 19.87, 21.92 10.00, 12.42 16.62" />
      <path d="M 11.89 11.61 A 2.19 6.45 25 0 1 7.46 10.45" />
      <path d="M 11.69 9.65 L 18.91 9.48 L 19.80 12.52 L 7.75 12.38 L 17.41 3.23" />
      {children}
    </svg>
  );
});

export default GeoPurple;
