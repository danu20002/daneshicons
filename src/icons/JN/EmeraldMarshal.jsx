import React from 'react';

export const iconData = {
  "id": "EmeraldMarshal",
  "name": "EmeraldMarshal",
  "category": "JN",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.91 8.42 C 10.03 17.55, 4.20 8.64, 19.51 19.54"
      }
    ],
    [
      "path",
      {
        "d": "M 6.46 3.99 C 11.76 8.85, 12.93 11.71, 19.63 16.44"
      }
    ],
    [
      "path",
      {
        "d": "M 2.76 7.57 C 19.68 8.87, 14.39 18.06, 21.40 18.35"
      }
    ],
    [
      "path",
      {
        "d": "M 3.26 6.06 C 17.59 14.10, 12.72 14.69, 14.32 19.12"
      }
    ],
    [
      "path",
      {
        "d": "M 7.33 9.55 C 19.49 10.41, 7.10 8.31, 17.67 14.70"
      }
    ]
  ]
};

export const EmeraldMarshal = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.91 8.42 C 10.03 17.55, 4.20 8.64, 19.51 19.54" />
      <path d="M 6.46 3.99 C 11.76 8.85, 12.93 11.71, 19.63 16.44" />
      <path d="M 2.76 7.57 C 19.68 8.87, 14.39 18.06, 21.40 18.35" />
      <path d="M 3.26 6.06 C 17.59 14.10, 12.72 14.69, 14.32 19.12" />
      <path d="M 7.33 9.55 C 19.49 10.41, 7.10 8.31, 17.67 14.70" />
      {children}
    </svg>
  );
});

export default EmeraldMarshal;
