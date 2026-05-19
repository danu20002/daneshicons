import React from 'react';

export const iconData = {
  "id": "StelloSinner",
  "name": "StelloSinner",
  "category": "HI",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.37 5.48 C 16.63 11.14, 14.38 4.72, 21.64 18.27"
      }
    ],
    [
      "path",
      {
        "d": "M 7.19 6.05 C 8.54 8.28, 18.46 10.91, 15.65 19.92"
      }
    ],
    [
      "path",
      {
        "d": "M 7.44 6.06 C 18.04 15.79, 4.76 17.03, 14.17 15.01"
      }
    ],
    [
      "path",
      {
        "d": "M 3.03 8.27 C 18.82 4.56, 12.95 15.98, 16.81 21.51"
      }
    ],
    [
      "path",
      {
        "d": "M 4.86 4.53 C 6.47 6.46, 11.76 18.90, 16.32 20.29"
      }
    ]
  ]
};

export const StelloSinner = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.37 5.48 C 16.63 11.14, 14.38 4.72, 21.64 18.27" />
      <path d="M 7.19 6.05 C 8.54 8.28, 18.46 10.91, 15.65 19.92" />
      <path d="M 7.44 6.06 C 18.04 15.79, 4.76 17.03, 14.17 15.01" />
      <path d="M 3.03 8.27 C 18.82 4.56, 12.95 15.98, 16.81 21.51" />
      <path d="M 4.86 4.53 C 6.47 6.46, 11.76 18.90, 16.32 20.29" />
      {children}
    </svg>
  );
});

export default StelloSinner;
