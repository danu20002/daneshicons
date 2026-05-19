import React from 'react';

export const iconData = {
  "id": "TrappoSoother",
  "name": "TrappoSoother",
  "category": "SO",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.01 15.33 L 21.31 20.68 L 20.60 4.19 L 14.87 7.93 L 7.12 10.42"
      }
    ],
    [
      "circle",
      {
        "cx": "12.01",
        "cy": "15.33",
        "r": "1.48"
      }
    ],
    [
      "circle",
      {
        "cx": "21.31",
        "cy": "20.68",
        "r": "1.42"
      }
    ],
    [
      "circle",
      {
        "cx": "20.60",
        "cy": "4.19",
        "r": "0.57"
      }
    ],
    [
      "circle",
      {
        "cx": "14.87",
        "cy": "7.93",
        "r": "0.87"
      }
    ],
    [
      "circle",
      {
        "cx": "7.12",
        "cy": "10.42",
        "r": "1.32"
      }
    ]
  ]
};

export const TrappoSoother = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.01 15.33 L 21.31 20.68 L 20.60 4.19 L 14.87 7.93 L 7.12 10.42" />
      <circle cx="12.01" cy="15.33" r="1.48" />
      <circle cx="21.31" cy="20.68" r="1.42" />
      <circle cx="20.60" cy="4.19" r="0.57" />
      <circle cx="14.87" cy="7.93" r="0.87" />
      <circle cx="7.12" cy="10.42" r="1.32" />
      {children}
    </svg>
  );
});

export default TrappoSoother;
