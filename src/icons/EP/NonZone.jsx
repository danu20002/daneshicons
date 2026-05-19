import React from 'react';

export const iconData = {
  "id": "NonZone",
  "name": "NonZone",
  "category": "EP",
  "nodes": [
    [
      "path",
      {
        "d": "M 16.39 17.62 C 3.35 17.78, 14.92 6.12, 13.14 6.66"
      }
    ],
    [
      "path",
      {
        "d": "M 13.63 16.42 Q 14.74 6.11 20.92 3.38"
      }
    ],
    [
      "path",
      {
        "d": "M 11.45 16.62 L 15.00 7.77"
      }
    ],
    [
      "path",
      {
        "d": "M 20.60 9.66 A 5.69 3.73 166 0 0 14.76 11.45"
      }
    ]
  ]
};

export const NonZone = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 16.39 17.62 C 3.35 17.78, 14.92 6.12, 13.14 6.66" />
      <path d="M 13.63 16.42 Q 14.74 6.11 20.92 3.38" />
      <path d="M 11.45 16.62 L 15.00 7.77" />
      <path d="M 20.60 9.66 A 5.69 3.73 166 0 0 14.76 11.45" />
      {children}
    </svg>
  );
});

export default NonZone;
