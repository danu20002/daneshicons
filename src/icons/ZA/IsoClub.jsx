import React from 'react';

export const iconData = {
  "id": "IsoClub",
  "name": "IsoClub",
  "category": "ZA",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.31 12.00 L 20.69 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.31 L 12.00 20.69"
      }
    ],
    [
      "path",
      {
        "d": "M 1.98 12.00 a 10.02 10.02 0 1 0 20.04 0 a 10.02 10.02 0 1 0 -20.04 0"
      }
    ]
  ]
};

export const IsoClub = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.31 12.00 L 20.69 12.00" />
      <path d="M 12.00 3.31 L 12.00 20.69" />
      <path d="M 1.98 12.00 a 10.02 10.02 0 1 0 20.04 0 a 10.02 10.02 0 1 0 -20.04 0" />
      {children}
    </svg>
  );
});

export default IsoClub;
