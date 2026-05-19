import React from 'react';

export const iconData = {
  "id": "VegliaPouch",
  "name": "VegliaPouch",
  "category": "LX",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.52 4.99 L 10.61 21.08 L 4.44 16.31 L 21.31 19.89 L 16.55 9.21 L 3.48 18.48 L 14.07 15.35"
      }
    ],
    [
      "path",
      {
        "d": "M 8.23 16.89 L 12.37 19.41 L 18.63 18.84 L 10.50 5.12"
      }
    ],
    [
      "path",
      {
        "d": "M 3.90 14.94 Q 7.80 19.48 11.49 9.37"
      }
    ],
    [
      "path",
      {
        "d": "M 13.41 21.06 C 2.50 3.08, 13.73 21.07, 12.91 20.02"
      }
    ],
    [
      "path",
      {
        "d": "M 2.26 5.33 A 4.91 3.93 148 0 0 3.29 21.54"
      }
    ]
  ]
};

export const VegliaPouch = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.52 4.99 L 10.61 21.08 L 4.44 16.31 L 21.31 19.89 L 16.55 9.21 L 3.48 18.48 L 14.07 15.35" />
      <path d="M 8.23 16.89 L 12.37 19.41 L 18.63 18.84 L 10.50 5.12" />
      <path d="M 3.90 14.94 Q 7.80 19.48 11.49 9.37" />
      <path d="M 13.41 21.06 C 2.50 3.08, 13.73 21.07, 12.91 20.02" />
      <path d="M 2.26 5.33 A 4.91 3.93 148 0 0 3.29 21.54" />
      {children}
    </svg>
  );
});

export default VegliaPouch;
