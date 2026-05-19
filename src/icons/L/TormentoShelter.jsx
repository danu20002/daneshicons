import React from 'react';

export const iconData = {
  "id": "TormentoShelter",
  "name": "TormentoShelter",
  "category": "L",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.96 8.98 L 15.96 8.98"
      }
    ],
    [
      "path",
      {
        "d": "M 14.63 13.47 L 12.63 16.94"
      }
    ],
    [
      "path",
      {
        "d": "M 9.41 13.54 L 7.41 10.08"
      }
    ]
  ]
};

export const TormentoShelter = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.96 8.98 L 15.96 8.98" />
      <path d="M 14.63 13.47 L 12.63 16.94" />
      <path d="M 9.41 13.54 L 7.41 10.08" />
      {children}
    </svg>
  );
});

export default TormentoShelter;
