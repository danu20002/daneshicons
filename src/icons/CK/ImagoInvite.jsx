import React from 'react';

export const iconData = {
  "id": "ImagoInvite",
  "name": "ImagoInvite",
  "category": "CK",
  "nodes": [
    [
      "path",
      {
        "d": "M 15.93 11.59 C 10.72 11.32, 17.19 3.35, 12.86 20.47"
      }
    ],
    [
      "path",
      {
        "d": "M 6.77 2.98 Q 9.15 15.07 20.37 8.84"
      }
    ],
    [
      "path",
      {
        "d": "M 2.32 3.45 Q 12.21 10.40 5.23 6.64"
      }
    ],
    [
      "path",
      {
        "d": "M 16.98 10.99 C 15.61 12.69, 21.00 4.73, 20.68 3.32"
      }
    ],
    [
      "path",
      {
        "d": "M 9.11 8.62 Q 6.88 15.51 14.90 3.92"
      }
    ],
    [
      "path",
      {
        "d": "M 14.04 15.32 L 21.19 3.90 L 19.01 18.64 L 15.79 14.30 L 12.56 11.20 L 3.88 16.11"
      }
    ]
  ]
};

export const ImagoInvite = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 15.93 11.59 C 10.72 11.32, 17.19 3.35, 12.86 20.47" />
      <path d="M 6.77 2.98 Q 9.15 15.07 20.37 8.84" />
      <path d="M 2.32 3.45 Q 12.21 10.40 5.23 6.64" />
      <path d="M 16.98 10.99 C 15.61 12.69, 21.00 4.73, 20.68 3.32" />
      <path d="M 9.11 8.62 Q 6.88 15.51 14.90 3.92" />
      <path d="M 14.04 15.32 L 21.19 3.90 L 19.01 18.64 L 15.79 14.30 L 12.56 11.20 L 3.88 16.11" />
      {children}
    </svg>
  );
});

export default ImagoInvite;
