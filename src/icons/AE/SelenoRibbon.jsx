import React from 'react';

export const iconData = {
  "id": "SelenoRibbon",
  "name": "SelenoRibbon",
  "category": "AE",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.37 10.99 L 12.37 10.99"
      }
    ],
    [
      "path",
      {
        "d": "M 11.84 8.24 L 13.07 12.04"
      }
    ],
    [
      "path",
      {
        "d": "M 15.53 10.68 L 12.29 13.03"
      }
    ],
    [
      "path",
      {
        "d": "M 14.34 14.95 L 11.11 12.60"
      }
    ],
    [
      "path",
      {
        "d": "M 9.92 15.14 L 11.16 11.34"
      }
    ]
  ]
};

export const SelenoRibbon = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.37 10.99 L 12.37 10.99" />
      <path d="M 11.84 8.24 L 13.07 12.04" />
      <path d="M 15.53 10.68 L 12.29 13.03" />
      <path d="M 14.34 14.95 L 11.11 12.60" />
      <path d="M 9.92 15.14 L 11.16 11.34" />
      {children}
    </svg>
  );
});

export default SelenoRibbon;
