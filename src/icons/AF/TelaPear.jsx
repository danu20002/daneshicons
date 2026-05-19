import React from 'react';

export const iconData = {
  "id": "TelaPear",
  "name": "TelaPear",
  "category": "AF",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.32 15.54 A 3.86 2.13 18 0 1 19.34 21.53"
      }
    ],
    [
      "path",
      {
        "d": "M 16.61 16.67 A 3.62 6.28 143 0 0 9.67 15.12"
      }
    ],
    [
      "path",
      {
        "d": "M 4.38 6.91 L 6.71 14.67 L 2.10 18.20"
      }
    ],
    [
      "path",
      {
        "d": "M 13.25 6.09 A 2.36 6.92 22 0 1 19.16 13.99"
      }
    ],
    [
      "path",
      {
        "d": "M 10.37 2.54 Q 15.82 12.92 6.21 10.03"
      }
    ]
  ]
};

export const TelaPear = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.32 15.54 A 3.86 2.13 18 0 1 19.34 21.53" />
      <path d="M 16.61 16.67 A 3.62 6.28 143 0 0 9.67 15.12" />
      <path d="M 4.38 6.91 L 6.71 14.67 L 2.10 18.20" />
      <path d="M 13.25 6.09 A 2.36 6.92 22 0 1 19.16 13.99" />
      <path d="M 10.37 2.54 Q 15.82 12.92 6.21 10.03" />
      {children}
    </svg>
  );
});

export default TelaPear;
