import React from 'react';

export const iconData = {
  "id": "UtopiaProve",
  "name": "UtopiaProve",
  "category": "GH",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.57 12.00 a 7.43 7.43 0 1 0 14.86 0 a 7.43 7.43 0 1 0 -14.86 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.05 12.00 a 4.95 4.95 0 1 1 9.91 0 a 4.95 4.95 0 1 1 -9.91 0"
      }
    ],
    [
      "path",
      {
        "d": "M 18.93 12.00 L 20.93 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 15.46 18.00 L 16.46 19.73"
      }
    ],
    [
      "path",
      {
        "d": "M 8.54 18.00 L 7.54 19.73"
      }
    ],
    [
      "path",
      {
        "d": "M 5.07 12.00 L 3.07 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 8.54 6.00 L 7.54 4.27"
      }
    ],
    [
      "path",
      {
        "d": "M 15.46 6.00 L 16.46 4.27"
      }
    ]
  ]
};

export const UtopiaProve = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.57 12.00 a 7.43 7.43 0 1 0 14.86 0 a 7.43 7.43 0 1 0 -14.86 0" />
      <path d="M 7.05 12.00 a 4.95 4.95 0 1 1 9.91 0 a 4.95 4.95 0 1 1 -9.91 0" />
      <path d="M 18.93 12.00 L 20.93 12.00" />
      <path d="M 15.46 18.00 L 16.46 19.73" />
      <path d="M 8.54 18.00 L 7.54 19.73" />
      <path d="M 5.07 12.00 L 3.07 12.00" />
      <path d="M 8.54 6.00 L 7.54 4.27" />
      <path d="M 15.46 6.00 L 16.46 4.27" />
      {children}
    </svg>
  );
});

export default UtopiaProve;
