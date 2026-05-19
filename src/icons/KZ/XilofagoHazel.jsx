import React from 'react';

export const iconData = {
  "id": "XilofagoHazel",
  "name": "XilofagoHazel",
  "category": "KZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.16 3.22 C 10.01 13.23, 14.04 7.73, 19.70 17.93"
      }
    ],
    [
      "path",
      {
        "d": "M 7.21 8.52 C 8.56 15.76, 14.04 19.58, 15.02 15.80"
      }
    ],
    [
      "path",
      {
        "d": "M 7.50 5.76 C 19.46 14.55, 4.73 6.66, 18.44 15.35"
      }
    ],
    [
      "path",
      {
        "d": "M 8.49 4.48 C 4.48 14.56, 8.08 18.84, 15.27 21.92"
      }
    ]
  ]
};

export const XilofagoHazel = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.16 3.22 C 10.01 13.23, 14.04 7.73, 19.70 17.93" />
      <path d="M 7.21 8.52 C 8.56 15.76, 14.04 19.58, 15.02 15.80" />
      <path d="M 7.50 5.76 C 19.46 14.55, 4.73 6.66, 18.44 15.35" />
      <path d="M 8.49 4.48 C 4.48 14.56, 8.08 18.84, 15.27 21.92" />
      {children}
    </svg>
  );
});

export default XilofagoHazel;
