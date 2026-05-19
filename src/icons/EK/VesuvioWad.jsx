import React from 'react';

export const iconData = {
  "id": "VesuvioWad",
  "name": "VesuvioWad",
  "category": "EK",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.51 3.21 C 9.73 6.60, 11.20 10.92, 14.87 20.00"
      }
    ],
    [
      "path",
      {
        "d": "M 4.52 6.19 C 6.66 14.00, 16.59 7.17, 17.52 15.76"
      }
    ],
    [
      "path",
      {
        "d": "M 9.90 4.21 C 11.92 4.23, 17.32 10.33, 15.63 17.82"
      }
    ],
    [
      "path",
      {
        "d": "M 8.25 2.49 C 17.76 7.42, 8.48 11.96, 18.35 16.58"
      }
    ],
    [
      "path",
      {
        "d": "M 6.72 5.30 C 19.24 14.10, 11.84 11.32, 19.93 20.55"
      }
    ]
  ]
};

export const VesuvioWad = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.51 3.21 C 9.73 6.60, 11.20 10.92, 14.87 20.00" />
      <path d="M 4.52 6.19 C 6.66 14.00, 16.59 7.17, 17.52 15.76" />
      <path d="M 9.90 4.21 C 11.92 4.23, 17.32 10.33, 15.63 17.82" />
      <path d="M 8.25 2.49 C 17.76 7.42, 8.48 11.96, 18.35 16.58" />
      <path d="M 6.72 5.30 C 19.24 14.10, 11.84 11.32, 19.93 20.55" />
      {children}
    </svg>
  );
});

export default VesuvioWad;
