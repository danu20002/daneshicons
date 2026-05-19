import React from 'react';

export const iconData = {
  "id": "TornadoSkirt",
  "name": "TornadoSkirt",
  "category": "AY",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.86 15.37 C 20.76 12.32, 11.50 2.92, 11.23 4.54"
      }
    ],
    [
      "path",
      {
        "d": "M 13.46 10.98 L 13.63 7.51 L 2.53 21.07 L 19.85 7.13 L 12.94 21.52 L 3.46 15.42 L 7.66 19.23"
      }
    ],
    [
      "path",
      {
        "d": "M 13.62 9.60 L 10.32 18.75 L 14.33 9.83 L 21.21 15.48 L 9.14 20.97 L 9.24 18.04 L 15.25 12.64 L 9.92 16.58"
      }
    ]
  ]
};

export const TornadoSkirt = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.86 15.37 C 20.76 12.32, 11.50 2.92, 11.23 4.54" />
      <path d="M 13.46 10.98 L 13.63 7.51 L 2.53 21.07 L 19.85 7.13 L 12.94 21.52 L 3.46 15.42 L 7.66 19.23" />
      <path d="M 13.62 9.60 L 10.32 18.75 L 14.33 9.83 L 21.21 15.48 L 9.14 20.97 L 9.24 18.04 L 15.25 12.64 L 9.92 16.58" />
      {children}
    </svg>
  );
});

export default TornadoSkirt;
