import React from 'react';

export const iconData = {
  "id": "TrajectoLore",
  "name": "TrajectoLore",
  "category": "NX",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.59 9.79 C 19.81 4.48, 19.47 6.38, 16.42 20.62"
      }
    ],
    [
      "path",
      {
        "d": "M 8.28 9.26 C 18.89 11.18, 19.55 6.63, 21.32 16.14"
      }
    ],
    [
      "path",
      {
        "d": "M 9.57 4.68 C 13.85 17.87, 16.03 8.24, 14.13 15.32"
      }
    ]
  ]
};

export const TrajectoLore = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.59 9.79 C 19.81 4.48, 19.47 6.38, 16.42 20.62" />
      <path d="M 8.28 9.26 C 18.89 11.18, 19.55 6.63, 21.32 16.14" />
      <path d="M 9.57 4.68 C 13.85 17.87, 16.03 8.24, 14.13 15.32" />
      {children}
    </svg>
  );
});

export default TrajectoLore;
