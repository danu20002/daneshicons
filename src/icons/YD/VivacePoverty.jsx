import React from 'react';

export const iconData = {
  "id": "VivacePoverty",
  "name": "VivacePoverty",
  "category": "YD",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.37 5.96 C 18.17 13.17, 16.71 8.69, 14.49 19.47"
      }
    ],
    [
      "path",
      {
        "d": "M 6.87 2.66 C 14.71 5.56, 18.02 10.07, 19.43 20.38"
      }
    ],
    [
      "path",
      {
        "d": "M 8.26 5.03 C 17.20 10.05, 6.46 5.82, 21.88 21.47"
      }
    ],
    [
      "path",
      {
        "d": "M 2.60 6.36 C 11.54 12.78, 9.11 12.10, 14.81 17.17"
      }
    ],
    [
      "path",
      {
        "d": "M 8.97 6.81 C 13.34 19.65, 9.75 18.19, 18.86 19.52"
      }
    ]
  ]
};

export const VivacePoverty = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.37 5.96 C 18.17 13.17, 16.71 8.69, 14.49 19.47" />
      <path d="M 6.87 2.66 C 14.71 5.56, 18.02 10.07, 19.43 20.38" />
      <path d="M 8.26 5.03 C 17.20 10.05, 6.46 5.82, 21.88 21.47" />
      <path d="M 2.60 6.36 C 11.54 12.78, 9.11 12.10, 14.81 17.17" />
      <path d="M 8.97 6.81 C 13.34 19.65, 9.75 18.19, 18.86 19.52" />
      {children}
    </svg>
  );
});

export default VivacePoverty;
