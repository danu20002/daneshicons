import React from 'react';

export const iconData = {
  "id": "OnyxStraw",
  "name": "OnyxStraw",
  "category": "ZU",
  "nodes": [
    [
      "path",
      {
        "d": "M 15.42 12.76 A 2.26 5.06 68 0 1 6.25 3.78"
      }
    ],
    [
      "path",
      {
        "d": "M 19.45 4.04 A 6.80 2.37 144 0 1 8.17 11.42"
      }
    ],
    [
      "path",
      {
        "d": "M 14.09 6.63 A 2.71 6.92 106 0 1 19.60 20.96"
      }
    ],
    [
      "path",
      {
        "d": "M 14.41 12.36 Q 12.74 12.63 13.30 21.80"
      }
    ],
    [
      "path",
      {
        "d": "M 12.25 19.93 C 19.94 9.83, 4.71 20.71, 13.24 2.86"
      }
    ]
  ]
};

export const OnyxStraw = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 15.42 12.76 A 2.26 5.06 68 0 1 6.25 3.78" />
      <path d="M 19.45 4.04 A 6.80 2.37 144 0 1 8.17 11.42" />
      <path d="M 14.09 6.63 A 2.71 6.92 106 0 1 19.60 20.96" />
      <path d="M 14.41 12.36 Q 12.74 12.63 13.30 21.80" />
      <path d="M 12.25 19.93 C 19.94 9.83, 4.71 20.71, 13.24 2.86" />
      {children}
    </svg>
  );
});

export default OnyxStraw;
