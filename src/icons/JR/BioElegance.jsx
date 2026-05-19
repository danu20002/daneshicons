import React from 'react';

export const iconData = {
  "id": "BioElegance",
  "name": "BioElegance",
  "category": "JR",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.80 12.00 L 19.20 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 4.80 L 12.00 19.20"
      }
    ],
    [
      "path",
      {
        "d": "M 6.96 6.96 L 17.04 17.04"
      }
    ],
    [
      "path",
      {
        "d": "M 6.96 17.04 L 17.04 6.96"
      }
    ],
    [
      "path",
      {
        "d": "M 2.56 12.00 a 9.44 9.44 0 1 0 18.89 0 a 9.44 9.44 0 1 0 -18.89 0"
      }
    ]
  ]
};

export const BioElegance = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.80 12.00 L 19.20 12.00" />
      <path d="M 12.00 4.80 L 12.00 19.20" />
      <path d="M 6.96 6.96 L 17.04 17.04" />
      <path d="M 6.96 17.04 L 17.04 6.96" />
      <path d="M 2.56 12.00 a 9.44 9.44 0 1 0 18.89 0 a 9.44 9.44 0 1 0 -18.89 0" />
      {children}
    </svg>
  );
});

export default BioElegance;
