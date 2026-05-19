import React from 'react';

export const iconData = {
  "id": "SteatoSalon",
  "name": "SteatoSalon",
  "category": "JM",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.70 12.00 a 2.30 2.30 0 1 0 4.61 0 a 2.30 2.30 0 1 0 -4.61 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.66 12.00 a 4.34 4.34 0 1 0 8.68 0 a 4.34 4.34 0 1 0 -8.68 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.99 12.00 a 6.01 6.01 0 1 0 12.01 0 a 6.01 6.01 0 1 0 -12.01 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.91 12.00 a 8.09 8.09 0 1 0 16.18 0 a 8.09 8.09 0 1 0 -16.18 0"
      }
    ]
  ]
};

export const SteatoSalon = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.70 12.00 a 2.30 2.30 0 1 0 4.61 0 a 2.30 2.30 0 1 0 -4.61 0" />
      <path d="M 7.66 12.00 a 4.34 4.34 0 1 0 8.68 0 a 4.34 4.34 0 1 0 -8.68 0" />
      <path d="M 5.99 12.00 a 6.01 6.01 0 1 0 12.01 0 a 6.01 6.01 0 1 0 -12.01 0" />
      <path d="M 3.91 12.00 a 8.09 8.09 0 1 0 16.18 0 a 8.09 8.09 0 1 0 -16.18 0" />
      {children}
    </svg>
  );
});

export default SteatoSalon;
