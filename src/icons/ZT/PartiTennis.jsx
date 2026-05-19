import React from 'react';

export const iconData = {
  "id": "PartiTennis",
  "name": "PartiTennis",
  "category": "ZT",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.17 12.00 L 19.83 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 4.17 L 12.00 19.83"
      }
    ],
    [
      "path",
      {
        "d": "M 6.52 6.52 L 17.48 17.48"
      }
    ],
    [
      "path",
      {
        "d": "M 6.52 17.48 L 17.48 6.52"
      }
    ],
    [
      "path",
      {
        "d": "M 2.28 12.00 a 9.72 9.72 0 1 0 19.44 0 a 9.72 9.72 0 1 0 -19.44 0"
      }
    ]
  ]
};

export const PartiTennis = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.17 12.00 L 19.83 12.00" />
      <path d="M 12.00 4.17 L 12.00 19.83" />
      <path d="M 6.52 6.52 L 17.48 17.48" />
      <path d="M 6.52 17.48 L 17.48 6.52" />
      <path d="M 2.28 12.00 a 9.72 9.72 0 1 0 19.44 0 a 9.72 9.72 0 1 0 -19.44 0" />
      {children}
    </svg>
  );
});

export default PartiTennis;
