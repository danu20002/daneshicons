import React from 'react';

export const iconData = {
  "id": "RustoTurkey",
  "name": "RustoTurkey",
  "category": "MS",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.80 16.12 L 8.93 21.81 L 7.95 21.49 L 12.55 3.22 L 13.67 20.92"
      }
    ],
    [
      "circle",
      {
        "cx": "10.80",
        "cy": "16.12",
        "r": "1.01"
      }
    ],
    [
      "circle",
      {
        "cx": "8.93",
        "cy": "21.81",
        "r": "0.85"
      }
    ],
    [
      "circle",
      {
        "cx": "7.95",
        "cy": "21.49",
        "r": "0.53"
      }
    ],
    [
      "circle",
      {
        "cx": "12.55",
        "cy": "3.22",
        "r": "0.80"
      }
    ],
    [
      "circle",
      {
        "cx": "13.67",
        "cy": "20.92",
        "r": "0.91"
      }
    ]
  ]
};

export const RustoTurkey = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.80 16.12 L 8.93 21.81 L 7.95 21.49 L 12.55 3.22 L 13.67 20.92" />
      <circle cx="10.80" cy="16.12" r="1.01" />
      <circle cx="8.93" cy="21.81" r="0.85" />
      <circle cx="7.95" cy="21.49" r="0.53" />
      <circle cx="12.55" cy="3.22" r="0.80" />
      <circle cx="13.67" cy="20.92" r="0.91" />
      {children}
    </svg>
  );
});

export default RustoTurkey;
