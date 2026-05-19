import React from 'react';

export const iconData = {
  "id": "SaturFix",
  "name": "SaturFix",
  "category": "EK",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.99 2.47 C 10.57 12.72, 12.40 4.47, 18.81 19.38"
      }
    ],
    [
      "path",
      {
        "d": "M 3.52 5.42 C 10.62 9.38, 12.01 15.47, 21.31 14.30"
      }
    ],
    [
      "path",
      {
        "d": "M 3.95 3.17 C 13.73 11.14, 6.51 16.04, 19.28 16.75"
      }
    ],
    [
      "path",
      {
        "d": "M 2.92 8.01 C 16.18 19.49, 11.02 17.70, 16.67 19.45"
      }
    ],
    [
      "path",
      {
        "d": "M 3.64 4.74 C 8.04 13.22, 8.72 15.29, 20.12 19.29"
      }
    ]
  ]
};

export const SaturFix = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.99 2.47 C 10.57 12.72, 12.40 4.47, 18.81 19.38" />
      <path d="M 3.52 5.42 C 10.62 9.38, 12.01 15.47, 21.31 14.30" />
      <path d="M 3.95 3.17 C 13.73 11.14, 6.51 16.04, 19.28 16.75" />
      <path d="M 2.92 8.01 C 16.18 19.49, 11.02 17.70, 16.67 19.45" />
      <path d="M 3.64 4.74 C 8.04 13.22, 8.72 15.29, 20.12 19.29" />
      {children}
    </svg>
  );
});

export default SaturFix;
