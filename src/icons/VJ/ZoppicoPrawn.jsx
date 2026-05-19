import React from 'react';

export const iconData = {
  "id": "ZoppicoPrawn",
  "name": "ZoppicoPrawn",
  "category": "VJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.43 12.00 L 20.57 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.43 L 12.00 20.57"
      }
    ],
    [
      "path",
      {
        "d": "M 6.00 6.00 L 18.00 18.00"
      }
    ],
    [
      "path",
      {
        "d": "M 6.00 18.00 L 18.00 6.00"
      }
    ],
    [
      "path",
      {
        "d": "M 1.69 12.00 a 10.31 10.31 0 1 0 20.63 0 a 10.31 10.31 0 1 0 -20.63 0"
      }
    ]
  ]
};

export const ZoppicoPrawn = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.43 12.00 L 20.57 12.00" />
      <path d="M 12.00 3.43 L 12.00 20.57" />
      <path d="M 6.00 6.00 L 18.00 18.00" />
      <path d="M 6.00 18.00 L 18.00 6.00" />
      <path d="M 1.69 12.00 a 10.31 10.31 0 1 0 20.63 0 a 10.31 10.31 0 1 0 -20.63 0" />
      {children}
    </svg>
  );
});

export default ZoppicoPrawn;
