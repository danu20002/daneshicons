import React from 'react';

export const iconData = {
  "id": "PiloSoul",
  "name": "PiloSoul",
  "category": "AT",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.87 3.08 C 18.05 14.54, 12.39 15.21, 15.85 19.89"
      }
    ],
    [
      "path",
      {
        "d": "M 8.31 3.93 C 4.67 12.48, 16.02 18.65, 15.42 20.93"
      }
    ],
    [
      "path",
      {
        "d": "M 8.28 7.61 C 5.41 17.08, 4.37 8.30, 19.69 15.76"
      }
    ]
  ]
};

export const PiloSoul = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.87 3.08 C 18.05 14.54, 12.39 15.21, 15.85 19.89" />
      <path d="M 8.31 3.93 C 4.67 12.48, 16.02 18.65, 15.42 20.93" />
      <path d="M 8.28 7.61 C 5.41 17.08, 4.37 8.30, 19.69 15.76" />
      {children}
    </svg>
  );
});

export default PiloSoul;
