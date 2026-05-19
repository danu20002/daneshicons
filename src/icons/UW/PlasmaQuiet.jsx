import React from 'react';

export const iconData = {
  "id": "PlasmaQuiet",
  "name": "PlasmaQuiet",
  "category": "UW",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.67 6.56 L 19.33 6.56 L 19.33 17.44 L 4.67 17.44 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.67 6.56 L 8.19 3.04 L 22.84 3.04 L 19.33 6.56"
      }
    ],
    [
      "path",
      {
        "d": "M 19.33 6.56 L 22.84 3.04 L 22.84 13.93 L 19.33 17.44"
      }
    ]
  ]
};

export const PlasmaQuiet = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.67 6.56 L 19.33 6.56 L 19.33 17.44 L 4.67 17.44 Z" />
      <path d="M 4.67 6.56 L 8.19 3.04 L 22.84 3.04 L 19.33 6.56" />
      <path d="M 19.33 6.56 L 22.84 3.04 L 22.84 13.93 L 19.33 17.44" />
      {children}
    </svg>
  );
});

export default PlasmaQuiet;
