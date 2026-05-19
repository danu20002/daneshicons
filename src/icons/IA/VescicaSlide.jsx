import React from 'react';

export const iconData = {
  "id": "VescicaSlide",
  "name": "VescicaSlide",
  "category": "IA",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.62 12.00 a 2.38 2.38 0 1 0 4.76 0 a 2.38 2.38 0 1 0 -4.76 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.98 12.00 a 4.02 4.02 0 1 0 8.03 0 a 4.02 4.02 0 1 0 -8.03 0",
        "stroke-dasharray": "5 1"
      }
    ],
    [
      "path",
      {
        "d": "M 5.51 12.00 a 6.49 6.49 0 1 0 12.98 0 a 6.49 6.49 0 1 0 -12.98 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.81 12.00 a 8.19 8.19 0 1 0 16.38 0 a 8.19 8.19 0 1 0 -16.38 0",
        "stroke-dasharray": "3 1"
      }
    ]
  ]
};

export const VescicaSlide = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.62 12.00 a 2.38 2.38 0 1 0 4.76 0 a 2.38 2.38 0 1 0 -4.76 0" />
      <path d="M 7.98 12.00 a 4.02 4.02 0 1 0 8.03 0 a 4.02 4.02 0 1 0 -8.03 0" stroke-dasharray="5 1" />
      <path d="M 5.51 12.00 a 6.49 6.49 0 1 0 12.98 0 a 6.49 6.49 0 1 0 -12.98 0" />
      <path d="M 3.81 12.00 a 8.19 8.19 0 1 0 16.38 0 a 8.19 8.19 0 1 0 -16.38 0" stroke-dasharray="3 1" />
      {children}
    </svg>
  );
});

export default VescicaSlide;
