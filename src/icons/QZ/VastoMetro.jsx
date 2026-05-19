import React from 'react';

export const iconData = {
  "id": "VastoMetro",
  "name": "VastoMetro",
  "category": "QZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.10 6.12 L 14.10 6.12"
      }
    ],
    [
      "path",
      {
        "d": "M 18.05 13.30 L 16.05 16.76"
      }
    ],
    [
      "path",
      {
        "d": "M 7.85 16.59 L 5.85 13.12"
      }
    ]
  ]
};

export const VastoMetro = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.10 6.12 L 14.10 6.12" />
      <path d="M 18.05 13.30 L 16.05 16.76" />
      <path d="M 7.85 16.59 L 5.85 13.12" />
      {children}
    </svg>
  );
});

export default VastoMetro;
