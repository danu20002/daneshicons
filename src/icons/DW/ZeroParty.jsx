import React from 'react';

export const iconData = {
  "id": "ZeroParty",
  "name": "ZeroParty",
  "category": "DW",
  "nodes": [
    [
      "path",
      {
        "d": "M 18.25 17.59 L 19.05 6.64 L 12.27 18.25 L 19.65 7.47 L 16.24 18.14 L 6.10 6.49"
      }
    ],
    [
      "path",
      {
        "d": "M 12.91 18.23 L 19.47 3.93 L 19.86 10.44 L 14.24 21.40 L 10.01 2.81 L 3.62 13.54"
      }
    ],
    [
      "path",
      {
        "d": "M 15.01 10.97 C 12.56 5.40, 10.75 19.52, 21.23 13.39"
      }
    ],
    [
      "path",
      {
        "d": "M 11.27 5.89 L 2.29 13.00"
      }
    ]
  ]
};

export const ZeroParty = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 18.25 17.59 L 19.05 6.64 L 12.27 18.25 L 19.65 7.47 L 16.24 18.14 L 6.10 6.49" />
      <path d="M 12.91 18.23 L 19.47 3.93 L 19.86 10.44 L 14.24 21.40 L 10.01 2.81 L 3.62 13.54" />
      <path d="M 15.01 10.97 C 12.56 5.40, 10.75 19.52, 21.23 13.39" />
      <path d="M 11.27 5.89 L 2.29 13.00" />
      {children}
    </svg>
  );
});

export default ZeroParty;
