import React from 'react';

export const iconData = {
  "id": "VampiroMotor",
  "name": "VampiroMotor",
  "category": "ZT",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.96 12.00 Q 14.33 13.34 16.98 20.62"
      }
    ],
    [
      "path",
      {
        "d": "M 16.98 20.62 Q 12.00 14.69 7.02 20.62"
      }
    ],
    [
      "path",
      {
        "d": "M 7.02 20.62 Q 9.67 13.34 2.04 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 2.04 12.00 Q 9.67 10.66 7.02 3.38"
      }
    ],
    [
      "path",
      {
        "d": "M 7.02 3.38 Q 12.00 9.31 16.98 3.38"
      }
    ],
    [
      "path",
      {
        "d": "M 16.98 3.38 Q 14.33 10.66 21.96 12.00"
      }
    ]
  ]
};

export const VampiroMotor = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.96 12.00 Q 14.33 13.34 16.98 20.62" />
      <path d="M 16.98 20.62 Q 12.00 14.69 7.02 20.62" />
      <path d="M 7.02 20.62 Q 9.67 13.34 2.04 12.00" />
      <path d="M 2.04 12.00 Q 9.67 10.66 7.02 3.38" />
      <path d="M 7.02 3.38 Q 12.00 9.31 16.98 3.38" />
      <path d="M 16.98 3.38 Q 14.33 10.66 21.96 12.00" />
      {children}
    </svg>
  );
});

export default VampiroMotor;
