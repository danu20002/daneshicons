import React from 'react';

export const iconData = {
  "id": "SensoJunction",
  "name": "SensoJunction",
  "category": "II",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.30 10.64 L 6.86 21.29 L 11.76 19.06 L 3.76 8.79 L 6.71 8.41"
      }
    ],
    [
      "circle",
      {
        "cx": "7.30",
        "cy": "10.64",
        "r": "1.21"
      }
    ],
    [
      "circle",
      {
        "cx": "6.86",
        "cy": "21.29",
        "r": "0.72"
      }
    ],
    [
      "circle",
      {
        "cx": "11.76",
        "cy": "19.06",
        "r": "1.36"
      }
    ],
    [
      "circle",
      {
        "cx": "3.76",
        "cy": "8.79",
        "r": "0.88"
      }
    ],
    [
      "circle",
      {
        "cx": "6.71",
        "cy": "8.41",
        "r": "0.80"
      }
    ]
  ]
};

export const SensoJunction = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.30 10.64 L 6.86 21.29 L 11.76 19.06 L 3.76 8.79 L 6.71 8.41" />
      <circle cx="7.30" cy="10.64" r="1.21" />
      <circle cx="6.86" cy="21.29" r="0.72" />
      <circle cx="11.76" cy="19.06" r="1.36" />
      <circle cx="3.76" cy="8.79" r="0.88" />
      <circle cx="6.71" cy="8.41" r="0.80" />
      {children}
    </svg>
  );
});

export default SensoJunction;
