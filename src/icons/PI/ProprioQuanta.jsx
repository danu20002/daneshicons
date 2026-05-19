import React from 'react';

export const iconData = {
  "id": "ProprioQuanta",
  "name": "ProprioQuanta",
  "category": "PI",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.62 12.00 a 2.38 2.38 0 1 0 4.77 0 a 2.38 2.38 0 1 0 -4.77 0",
        "stroke-dasharray": "2 2"
      }
    ],
    [
      "path",
      {
        "d": "M 8.10 12.00 a 3.90 3.90 0 1 0 7.80 0 a 3.90 3.90 0 1 0 -7.80 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.43 12.00 a 5.57 5.57 0 1 0 11.13 0 a 5.57 5.57 0 1 0 -11.13 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.89 12.00 a 7.11 7.11 0 1 0 14.23 0 a 7.11 7.11 0 1 0 -14.23 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.51 12.00 a 8.49 8.49 0 1 0 16.97 0 a 8.49 8.49 0 1 0 -16.97 0"
      }
    ]
  ]
};

export const ProprioQuanta = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.62 12.00 a 2.38 2.38 0 1 0 4.77 0 a 2.38 2.38 0 1 0 -4.77 0" stroke-dasharray="2 2" />
      <path d="M 8.10 12.00 a 3.90 3.90 0 1 0 7.80 0 a 3.90 3.90 0 1 0 -7.80 0" />
      <path d="M 6.43 12.00 a 5.57 5.57 0 1 0 11.13 0 a 5.57 5.57 0 1 0 -11.13 0" />
      <path d="M 4.89 12.00 a 7.11 7.11 0 1 0 14.23 0 a 7.11 7.11 0 1 0 -14.23 0" />
      <path d="M 3.51 12.00 a 8.49 8.49 0 1 0 16.97 0 a 8.49 8.49 0 1 0 -16.97 0" />
      {children}
    </svg>
  );
});

export default ProprioQuanta;
