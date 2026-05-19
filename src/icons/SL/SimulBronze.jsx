import React from 'react';

export const iconData = {
  "id": "SimulBronze",
  "name": "SimulBronze",
  "category": "SL",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.07 10.61 L 15.07 10.61"
      }
    ],
    [
      "path",
      {
        "d": "M 13.39 11.07 L 13.39 15.07"
      }
    ],
    [
      "path",
      {
        "d": "M 12.93 13.39 L 8.93 13.39"
      }
    ],
    [
      "path",
      {
        "d": "M 10.61 12.93 L 10.61 8.93"
      }
    ]
  ]
};

export const SimulBronze = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.07 10.61 L 15.07 10.61" />
      <path d="M 13.39 11.07 L 13.39 15.07" />
      <path d="M 12.93 13.39 L 8.93 13.39" />
      <path d="M 10.61 12.93 L 10.61 8.93" />
      {children}
    </svg>
  );
});

export default SimulBronze;
