import React from 'react';

export const iconData = {
  "id": "VellutoTravel",
  "name": "VellutoTravel",
  "category": "ET",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.05 12.00 a 9.95 9.95 0 1 0 19.91 0 a 9.95 9.95 0 1 0 -19.91 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.05 12.00 a 9.95 2.986460678000003 0 1 0 19.91 0 a 9.95 2.986460678000003 0 1 0 -19.91 0"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.05 A 2 2 0 0 0 12.00 21.95"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.05 A 2 2 0 0 1 12.00 21.95"
      }
    ]
  ]
};

export const VellutoTravel = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.05 12.00 a 9.95 9.95 0 1 0 19.91 0 a 9.95 9.95 0 1 0 -19.91 0" />
      <path d="M 2.05 12.00 a 9.95 2.986460678000003 0 1 0 19.91 0 a 9.95 2.986460678000003 0 1 0 -19.91 0" />
      <path d="M 12.00 2.05 A 2 2 0 0 0 12.00 21.95" />
      <path d="M 12.00 2.05 A 2 2 0 0 1 12.00 21.95" />
      {children}
    </svg>
  );
});

export default VellutoTravel;
