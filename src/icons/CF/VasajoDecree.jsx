import React from 'react';

export const iconData = {
  "id": "VasajoDecree",
  "name": "VasajoDecree",
  "category": "CF",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.35 9.26 C 16.71 4.54, 11.93 9.65, 18.92 19.69"
      }
    ],
    [
      "path",
      {
        "d": "M 4.20 4.93 C 8.66 7.88, 6.16 17.87, 21.32 15.79"
      }
    ],
    [
      "path",
      {
        "d": "M 6.96 8.37 C 19.30 14.95, 13.60 19.52, 16.76 20.27"
      }
    ],
    [
      "path",
      {
        "d": "M 7.55 5.57 C 7.82 12.38, 19.06 15.87, 19.44 20.22"
      }
    ],
    [
      "path",
      {
        "d": "M 2.59 7.20 C 5.40 6.59, 13.15 6.47, 15.72 18.12"
      }
    ]
  ]
};

export const VasajoDecree = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.35 9.26 C 16.71 4.54, 11.93 9.65, 18.92 19.69" />
      <path d="M 4.20 4.93 C 8.66 7.88, 6.16 17.87, 21.32 15.79" />
      <path d="M 6.96 8.37 C 19.30 14.95, 13.60 19.52, 16.76 20.27" />
      <path d="M 7.55 5.57 C 7.82 12.38, 19.06 15.87, 19.44 20.22" />
      <path d="M 2.59 7.20 C 5.40 6.59, 13.15 6.47, 15.72 18.12" />
      {children}
    </svg>
  );
});

export default VasajoDecree;
