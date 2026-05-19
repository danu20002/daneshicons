import React from 'react';

export const iconData = {
  "id": "UrbanoDevice",
  "name": "UrbanoDevice",
  "category": "ZU",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.35 5.15 A 2.55 3.53 128 0 0 21.55 9.30"
      }
    ],
    [
      "path",
      {
        "d": "M 20.69 12.10 C 9.42 12.62, 6.89 3.70, 9.86 7.24"
      }
    ],
    [
      "path",
      {
        "d": "M 16.50 19.28 C 3.56 13.73, 12.38 7.19, 18.75 17.29"
      }
    ],
    [
      "path",
      {
        "d": "M 17.19 18.41 Q 11.75 4.67 6.99 5.33"
      }
    ],
    [
      "path",
      {
        "d": "M 3.11 18.50 C 21.45 19.43, 11.21 17.27, 2.24 19.94"
      }
    ]
  ]
};

export const UrbanoDevice = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.35 5.15 A 2.55 3.53 128 0 0 21.55 9.30" />
      <path d="M 20.69 12.10 C 9.42 12.62, 6.89 3.70, 9.86 7.24" />
      <path d="M 16.50 19.28 C 3.56 13.73, 12.38 7.19, 18.75 17.29" />
      <path d="M 17.19 18.41 Q 11.75 4.67 6.99 5.33" />
      <path d="M 3.11 18.50 C 21.45 19.43, 11.21 17.27, 2.24 19.94" />
      {children}
    </svg>
  );
});

export default UrbanoDevice;
