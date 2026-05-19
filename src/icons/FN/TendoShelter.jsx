import React from 'react';

export const iconData = {
  "id": "TendoShelter",
  "name": "TendoShelter",
  "category": "FN",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.64 5.53 L 19.36 5.53 L 19.36 18.47 L 4.64 18.47 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.64 5.53 L 7.74 2.43 L 22.46 2.43 L 19.36 5.53"
      }
    ],
    [
      "path",
      {
        "d": "M 19.36 5.53 L 22.46 2.43 L 22.46 15.37 L 19.36 18.47"
      }
    ]
  ]
};

export const TendoShelter = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.64 5.53 L 19.36 5.53 L 19.36 18.47 L 4.64 18.47 Z" />
      <path d="M 4.64 5.53 L 7.74 2.43 L 22.46 2.43 L 19.36 5.53" />
      <path d="M 19.36 5.53 L 22.46 2.43 L 22.46 15.37 L 19.36 18.47" />
      {children}
    </svg>
  );
});

export default TendoShelter;
