import React from 'react';

export const iconData = {
  "id": "HaptoGet",
  "name": "HaptoGet",
  "category": "MQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.54 8.26 L 16.19 19.67"
      }
    ],
    [
      "path",
      {
        "d": "M 6.52 7.00 Q 5.34 17.92 17.53 11.37"
      }
    ],
    [
      "path",
      {
        "d": "M 10.48 12.29 A 5.79 6.61 155 0 1 16.47 19.42"
      }
    ],
    [
      "path",
      {
        "d": "M 7.51 17.34 Q 13.39 16.67 10.01 2.26"
      }
    ],
    [
      "path",
      {
        "d": "M 19.96 12.28 C 15.47 7.56, 19.27 15.37, 16.57 17.17"
      }
    ]
  ]
};

export const HaptoGet = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.54 8.26 L 16.19 19.67" />
      <path d="M 6.52 7.00 Q 5.34 17.92 17.53 11.37" />
      <path d="M 10.48 12.29 A 5.79 6.61 155 0 1 16.47 19.42" />
      <path d="M 7.51 17.34 Q 13.39 16.67 10.01 2.26" />
      <path d="M 19.96 12.28 C 15.47 7.56, 19.27 15.37, 16.57 17.17" />
      {children}
    </svg>
  );
});

export default HaptoGet;
