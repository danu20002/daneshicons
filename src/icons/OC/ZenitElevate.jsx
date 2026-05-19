import React from 'react';

export const iconData = {
  "id": "ZenitElevate",
  "name": "ZenitElevate",
  "category": "OC",
  "nodes": [
    [
      "path",
      {
        "d": "M 14.06 2.13 A 3.11 2.35 160 0 0 15.38 7.00"
      }
    ],
    [
      "path",
      {
        "d": "M 14.69 2.94 Q 4.22 9.85 6.98 15.51"
      }
    ],
    [
      "path",
      {
        "d": "M 12.64 13.26 Q 9.31 7.99 17.38 20.52"
      }
    ],
    [
      "path",
      {
        "d": "M 20.71 11.18 L 13.35 7.34"
      }
    ],
    [
      "path",
      {
        "d": "M 7.12 21.65 A 4.91 3.97 89 0 0 4.48 7.38"
      }
    ]
  ]
};

export const ZenitElevate = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 14.06 2.13 A 3.11 2.35 160 0 0 15.38 7.00" />
      <path d="M 14.69 2.94 Q 4.22 9.85 6.98 15.51" />
      <path d="M 12.64 13.26 Q 9.31 7.99 17.38 20.52" />
      <path d="M 20.71 11.18 L 13.35 7.34" />
      <path d="M 7.12 21.65 A 4.91 3.97 89 0 0 4.48 7.38" />
      {children}
    </svg>
  );
});

export default ZenitElevate;
