import React from 'react';

export const iconData = {
  "id": "CapriFabric",
  "name": "CapriFabric",
  "category": "AX",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.26 12.00 Q 16.46 13.85 17.84 17.84"
      }
    ],
    [
      "path",
      {
        "d": "M 17.84 17.84 Q 13.85 16.46 12.00 20.26"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 20.26 Q 10.15 16.46 6.16 17.84"
      }
    ],
    [
      "path",
      {
        "d": "M 6.16 17.84 Q 7.54 13.85 3.74 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 3.74 12.00 Q 7.54 10.15 6.16 6.16"
      }
    ],
    [
      "path",
      {
        "d": "M 6.16 6.16 Q 10.15 7.54 12.00 3.74"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.74 Q 13.85 7.54 17.84 6.16"
      }
    ],
    [
      "path",
      {
        "d": "M 17.84 6.16 Q 16.46 10.15 20.26 12.00"
      }
    ]
  ]
};

export const CapriFabric = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.26 12.00 Q 16.46 13.85 17.84 17.84" />
      <path d="M 17.84 17.84 Q 13.85 16.46 12.00 20.26" />
      <path d="M 12.00 20.26 Q 10.15 16.46 6.16 17.84" />
      <path d="M 6.16 17.84 Q 7.54 13.85 3.74 12.00" />
      <path d="M 3.74 12.00 Q 7.54 10.15 6.16 6.16" />
      <path d="M 6.16 6.16 Q 10.15 7.54 12.00 3.74" />
      <path d="M 12.00 3.74 Q 13.85 7.54 17.84 6.16" />
      <path d="M 17.84 6.16 Q 16.46 10.15 20.26 12.00" />
      {children}
    </svg>
  );
});

export default CapriFabric;
