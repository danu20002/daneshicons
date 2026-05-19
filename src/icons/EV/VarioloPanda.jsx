import React from 'react';

export const iconData = {
  "id": "VarioloPanda",
  "name": "VarioloPanda",
  "category": "EV",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.39 12.00 a 8.61 8.61 0 1 0 17.22 0 a 8.61 8.61 0 1 0 -17.22 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.41 12.00 a 6.59 6.59 0 1 1 13.19 0 a 6.59 6.59 0 1 1 -13.19 0"
      }
    ],
    [
      "path",
      {
        "d": "M 20.11 12.00 L 22.11 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 17.73 17.73 L 19.15 19.15"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 20.11 L 12.00 22.11"
      }
    ],
    [
      "path",
      {
        "d": "M 6.27 17.73 L 4.85 19.15"
      }
    ],
    [
      "path",
      {
        "d": "M 3.89 12.00 L 1.89 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 6.27 6.27 L 4.85 4.85"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.89 L 12.00 1.89"
      }
    ],
    [
      "path",
      {
        "d": "M 17.73 6.27 L 19.15 4.85"
      }
    ]
  ]
};

export const VarioloPanda = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.39 12.00 a 8.61 8.61 0 1 0 17.22 0 a 8.61 8.61 0 1 0 -17.22 0" />
      <path d="M 5.41 12.00 a 6.59 6.59 0 1 1 13.19 0 a 6.59 6.59 0 1 1 -13.19 0" />
      <path d="M 20.11 12.00 L 22.11 12.00" />
      <path d="M 17.73 17.73 L 19.15 19.15" />
      <path d="M 12.00 20.11 L 12.00 22.11" />
      <path d="M 6.27 17.73 L 4.85 19.15" />
      <path d="M 3.89 12.00 L 1.89 12.00" />
      <path d="M 6.27 6.27 L 4.85 4.85" />
      <path d="M 12.00 3.89 L 12.00 1.89" />
      <path d="M 17.73 6.27 L 19.15 4.85" />
      {children}
    </svg>
  );
});

export default VarioloPanda;
