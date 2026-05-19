import React from 'react';

export const iconData = {
  "id": "NovoShelter",
  "name": "NovoShelter",
  "category": "RU",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.97 13.41 L 6.29 19.06 L 8.74 3.53 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 17.84 14.53 L 6.88 15.79 L 11.28 5.67 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 14.26 14.02 L 9.12 12.95 L 12.61 9.03 Z"
      }
    ]
  ]
};

export const NovoShelter = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.97 13.41 L 6.29 19.06 L 8.74 3.53 Z" />
      <path d="M 17.84 14.53 L 6.88 15.79 L 11.28 5.67 Z" />
      <path d="M 14.26 14.02 L 9.12 12.95 L 12.61 9.03 Z" />
      {children}
    </svg>
  );
});

export default NovoShelter;
