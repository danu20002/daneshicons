import React from 'react';

export const iconData = {
  "id": "LensoRobot",
  "name": "LensoRobot",
  "category": "MQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.35 5.33 C 21.00 20.86, 19.50 10.99, 6.21 5.40"
      }
    ],
    [
      "path",
      {
        "d": "M 9.17 5.46 C 21.11 5.99, 14.89 19.95, 13.58 15.94"
      }
    ],
    [
      "path",
      {
        "d": "M 3.31 17.74 A 5.11 4.34 27 0 1 6.80 13.75"
      }
    ],
    [
      "path",
      {
        "d": "M 5.74 11.53 L 8.07 21.02"
      }
    ],
    [
      "path",
      {
        "d": "M 9.81 14.09 C 21.44 17.06, 21.01 5.64, 8.47 5.03"
      }
    ]
  ]
};

export const LensoRobot = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.35 5.33 C 21.00 20.86, 19.50 10.99, 6.21 5.40" />
      <path d="M 9.17 5.46 C 21.11 5.99, 14.89 19.95, 13.58 15.94" />
      <path d="M 3.31 17.74 A 5.11 4.34 27 0 1 6.80 13.75" />
      <path d="M 5.74 11.53 L 8.07 21.02" />
      <path d="M 9.81 14.09 C 21.44 17.06, 21.01 5.64, 8.47 5.03" />
      {children}
    </svg>
  );
});

export default LensoRobot;
