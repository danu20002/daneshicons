import React from 'react';

export const iconData = {
  "id": "OnyxLace",
  "name": "OnyxLace",
  "category": "CK",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.79 15.37 Q 10.72 10.23 21.40 21.03"
      }
    ],
    [
      "path",
      {
        "d": "M 13.58 20.63 L 3.20 19.67 L 16.32 14.35 L 2.69 5.50 L 9.53 14.13"
      }
    ],
    [
      "path",
      {
        "d": "M 18.34 10.48 C 15.32 13.79, 18.24 17.06, 17.67 8.14"
      }
    ],
    [
      "path",
      {
        "d": "M 10.49 3.79 L 19.16 6.93"
      }
    ]
  ]
};

export const OnyxLace = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.79 15.37 Q 10.72 10.23 21.40 21.03" />
      <path d="M 13.58 20.63 L 3.20 19.67 L 16.32 14.35 L 2.69 5.50 L 9.53 14.13" />
      <path d="M 18.34 10.48 C 15.32 13.79, 18.24 17.06, 17.67 8.14" />
      <path d="M 10.49 3.79 L 19.16 6.93" />
      {children}
    </svg>
  );
});

export default OnyxLace;
