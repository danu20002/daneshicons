import React from 'react';

export const iconData = {
  "id": "SeveroKick",
  "name": "SeveroKick",
  "category": "YW",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.34 2.42 C 13.03 6.72, 5.26 14.36, 20.63 20.60"
      }
    ],
    [
      "path",
      {
        "d": "M 7.30 6.84 C 6.13 6.67, 7.64 4.14, 17.46 18.58"
      }
    ],
    [
      "path",
      {
        "d": "M 9.07 5.96 C 8.95 14.11, 6.45 9.29, 21.16 18.58"
      }
    ],
    [
      "path",
      {
        "d": "M 4.33 5.68 C 17.90 19.45, 9.28 19.83, 17.93 14.90"
      }
    ],
    [
      "path",
      {
        "d": "M 9.37 9.48 C 11.03 9.76, 15.92 13.84, 19.29 14.48"
      }
    ],
    [
      "path",
      {
        "d": "M 3.61 3.05 C 5.42 14.97, 5.24 17.29, 18.14 15.86"
      }
    ]
  ]
};

export const SeveroKick = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.34 2.42 C 13.03 6.72, 5.26 14.36, 20.63 20.60" />
      <path d="M 7.30 6.84 C 6.13 6.67, 7.64 4.14, 17.46 18.58" />
      <path d="M 9.07 5.96 C 8.95 14.11, 6.45 9.29, 21.16 18.58" />
      <path d="M 4.33 5.68 C 17.90 19.45, 9.28 19.83, 17.93 14.90" />
      <path d="M 9.37 9.48 C 11.03 9.76, 15.92 13.84, 19.29 14.48" />
      <path d="M 3.61 3.05 C 5.42 14.97, 5.24 17.29, 18.14 15.86" />
      {children}
    </svg>
  );
});

export default SeveroKick;
