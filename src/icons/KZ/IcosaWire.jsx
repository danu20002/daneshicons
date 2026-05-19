import React from 'react';

export const iconData = {
  "id": "IcosaWire",
  "name": "IcosaWire",
  "category": "KZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.18 2.18 C 4.64 4.84, 4.75 11.04, 18.73 16.98"
      }
    ],
    [
      "path",
      {
        "d": "M 2.29 9.36 C 6.93 10.77, 9.72 10.96, 17.51 17.74"
      }
    ],
    [
      "path",
      {
        "d": "M 7.74 6.80 C 8.96 5.24, 12.63 4.46, 18.37 19.52"
      }
    ]
  ]
};

export const IcosaWire = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.18 2.18 C 4.64 4.84, 4.75 11.04, 18.73 16.98" />
      <path d="M 2.29 9.36 C 6.93 10.77, 9.72 10.96, 17.51 17.74" />
      <path d="M 7.74 6.80 C 8.96 5.24, 12.63 4.46, 18.37 19.52" />
      {children}
    </svg>
  );
});

export default IcosaWire;
