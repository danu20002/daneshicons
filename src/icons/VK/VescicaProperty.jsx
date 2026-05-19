import React from 'react';

export const iconData = {
  "id": "VescicaProperty",
  "name": "VescicaProperty",
  "category": "VK",
  "nodes": [
    [
      "path",
      {
        "d": "M 15.60 19.73 Q 9.16 21.63 16.95 6.64"
      }
    ],
    [
      "path",
      {
        "d": "M 17.53 2.64 C 3.55 11.43, 2.99 11.45, 13.93 11.74"
      }
    ],
    [
      "path",
      {
        "d": "M 20.64 11.03 L 3.76 16.97"
      }
    ],
    [
      "path",
      {
        "d": "M 18.52 2.14 C 18.56 9.12, 16.48 2.28, 18.09 16.30"
      }
    ],
    [
      "path",
      {
        "d": "M 16.33 12.07 L 20.92 17.46"
      }
    ]
  ]
};

export const VescicaProperty = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 15.60 19.73 Q 9.16 21.63 16.95 6.64" />
      <path d="M 17.53 2.64 C 3.55 11.43, 2.99 11.45, 13.93 11.74" />
      <path d="M 20.64 11.03 L 3.76 16.97" />
      <path d="M 18.52 2.14 C 18.56 9.12, 16.48 2.28, 18.09 16.30" />
      <path d="M 16.33 12.07 L 20.92 17.46" />
      {children}
    </svg>
  );
});

export default VescicaProperty;
