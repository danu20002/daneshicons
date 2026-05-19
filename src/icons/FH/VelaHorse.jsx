import React from 'react';

export const iconData = {
  "id": "VelaHorse",
  "name": "VelaHorse",
  "category": "FH",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.85 12.00 L 19.15 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 4.85 L 12.00 19.15"
      }
    ],
    [
      "path",
      {
        "d": "M 1.27 12.00 a 10.73 10.73 0 1 0 21.46 0 a 10.73 10.73 0 1 0 -21.46 0"
      }
    ]
  ]
};

export const VelaHorse = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.85 12.00 L 19.15 12.00" />
      <path d="M 12.00 4.85 L 12.00 19.15" />
      <path d="M 1.27 12.00 a 10.73 10.73 0 1 0 21.46 0 a 10.73 10.73 0 1 0 -21.46 0" />
      {children}
    </svg>
  );
});

export default VelaHorse;
