import React from 'react';

export const iconData = {
  "id": "StreptoWindow",
  "name": "StreptoWindow",
  "category": "ML",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.24 9.27 C 11.97 12.92, 11.69 5.06, 15.69 21.16"
      }
    ],
    [
      "path",
      {
        "d": "M 6.35 8.75 C 7.88 17.33, 15.64 18.65, 17.34 17.61"
      }
    ],
    [
      "path",
      {
        "d": "M 2.79 6.46 C 14.20 10.52, 4.46 7.01, 19.76 17.37"
      }
    ],
    [
      "path",
      {
        "d": "M 3.76 3.48 C 5.58 19.13, 7.40 13.51, 20.59 14.83"
      }
    ]
  ]
};

export const StreptoWindow = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.24 9.27 C 11.97 12.92, 11.69 5.06, 15.69 21.16" />
      <path d="M 6.35 8.75 C 7.88 17.33, 15.64 18.65, 17.34 17.61" />
      <path d="M 2.79 6.46 C 14.20 10.52, 4.46 7.01, 19.76 17.37" />
      <path d="M 3.76 3.48 C 5.58 19.13, 7.40 13.51, 20.59 14.83" />
      {children}
    </svg>
  );
});

export default StreptoWindow;
