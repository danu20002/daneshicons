import React from 'react';

export const iconData = {
  "id": "HelioTyrant",
  "name": "HelioTyrant",
  "category": "QG",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.71 12.00 L 18.29 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 5.71 L 12.00 18.29"
      }
    ],
    [
      "path",
      {
        "d": "M 7.60 7.60 L 16.40 16.40"
      }
    ],
    [
      "path",
      {
        "d": "M 7.60 16.40 L 16.40 7.60"
      }
    ],
    [
      "path",
      {
        "d": "M 1.98 12.00 a 10.02 10.02 0 1 0 20.03 0 a 10.02 10.02 0 1 0 -20.03 0"
      }
    ]
  ]
};

export const HelioTyrant = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.71 12.00 L 18.29 12.00" />
      <path d="M 12.00 5.71 L 12.00 18.29" />
      <path d="M 7.60 7.60 L 16.40 16.40" />
      <path d="M 7.60 16.40 L 16.40 7.60" />
      <path d="M 1.98 12.00 a 10.02 10.02 0 1 0 20.03 0 a 10.02 10.02 0 1 0 -20.03 0" />
      {children}
    </svg>
  );
});

export default HelioTyrant;
