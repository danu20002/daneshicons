import React from 'react';

export const iconData = {
  "id": "HexaHelp",
  "name": "HexaHelp",
  "category": "PB",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.07 12.00 a 7.93 7.93 0 1 0 15.85 0 a 7.93 7.93 0 1 0 -15.85 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.68 12.00 a 6.32 6.32 0 1 1 12.64 0 a 6.32 6.32 0 1 1 -12.64 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.43 12.00 L 21.43 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 15.71 18.43 L 16.71 20.16"
      }
    ],
    [
      "path",
      {
        "d": "M 8.29 18.43 L 7.29 20.16"
      }
    ],
    [
      "path",
      {
        "d": "M 4.57 12.00 L 2.57 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 8.29 5.57 L 7.29 3.84"
      }
    ],
    [
      "path",
      {
        "d": "M 15.71 5.57 L 16.71 3.84"
      }
    ]
  ]
};

export const HexaHelp = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.07 12.00 a 7.93 7.93 0 1 0 15.85 0 a 7.93 7.93 0 1 0 -15.85 0" />
      <path d="M 5.68 12.00 a 6.32 6.32 0 1 1 12.64 0 a 6.32 6.32 0 1 1 -12.64 0" />
      <path d="M 19.43 12.00 L 21.43 12.00" />
      <path d="M 15.71 18.43 L 16.71 20.16" />
      <path d="M 8.29 18.43 L 7.29 20.16" />
      <path d="M 4.57 12.00 L 2.57 12.00" />
      <path d="M 8.29 5.57 L 7.29 3.84" />
      <path d="M 15.71 5.57 L 16.71 3.84" />
      {children}
    </svg>
  );
});

export default HexaHelp;
