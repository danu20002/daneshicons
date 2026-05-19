import React from 'react';

export const iconData = {
  "id": "VegetoLady",
  "name": "VegetoLady",
  "category": "YH",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.53 12.00 L 19.47 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 4.53 L 12.00 19.47"
      }
    ],
    [
      "path",
      {
        "d": "M 6.77 6.77 L 17.23 17.23"
      }
    ],
    [
      "path",
      {
        "d": "M 6.77 17.23 L 17.23 6.77"
      }
    ],
    [
      "path",
      {
        "d": "M 2.35 12.00 a 9.65 9.65 0 1 0 19.29 0 a 9.65 9.65 0 1 0 -19.29 0"
      }
    ]
  ]
};

export const VegetoLady = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.53 12.00 L 19.47 12.00" />
      <path d="M 12.00 4.53 L 12.00 19.47" />
      <path d="M 6.77 6.77 L 17.23 17.23" />
      <path d="M 6.77 17.23 L 17.23 6.77" />
      <path d="M 2.35 12.00 a 9.65 9.65 0 1 0 19.29 0 a 9.65 9.65 0 1 0 -19.29 0" />
      {children}
    </svg>
  );
});

export default VegetoLady;
