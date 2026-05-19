import React from 'react';

export const iconData = {
  "id": "LumenRheum",
  "name": "LumenRheum",
  "category": "VF",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.24 4.84 C 14.96 6.42, 10.67 6.17, 20.61 15.31"
      }
    ],
    [
      "path",
      {
        "d": "M 5.34 9.19 C 8.08 8.36, 16.33 19.22, 18.68 17.13"
      }
    ],
    [
      "path",
      {
        "d": "M 9.01 4.75 C 18.45 4.92, 16.27 11.85, 20.11 19.97"
      }
    ],
    [
      "path",
      {
        "d": "M 9.84 2.68 C 11.31 7.45, 19.96 9.95, 21.24 16.33"
      }
    ]
  ]
};

export const LumenRheum = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.24 4.84 C 14.96 6.42, 10.67 6.17, 20.61 15.31" />
      <path d="M 5.34 9.19 C 8.08 8.36, 16.33 19.22, 18.68 17.13" />
      <path d="M 9.01 4.75 C 18.45 4.92, 16.27 11.85, 20.11 19.97" />
      <path d="M 9.84 2.68 C 11.31 7.45, 19.96 9.95, 21.24 16.33" />
      {children}
    </svg>
  );
});

export default LumenRheum;
