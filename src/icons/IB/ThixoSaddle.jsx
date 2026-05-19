import React from 'react';

export const iconData = {
  "id": "ThixoSaddle",
  "name": "ThixoSaddle",
  "category": "IB",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.34 5.65 C 19.50 7.35, 17.34 19.87, 18.07 20.93"
      }
    ],
    [
      "path",
      {
        "d": "M 9.71 2.50 C 17.91 17.07, 19.15 16.90, 15.38 21.88"
      }
    ],
    [
      "path",
      {
        "d": "M 2.94 4.94 C 15.07 4.76, 11.91 12.62, 16.27 16.95"
      }
    ],
    [
      "path",
      {
        "d": "M 6.79 5.40 C 6.85 16.79, 7.52 13.08, 20.37 15.07"
      }
    ]
  ]
};

export const ThixoSaddle = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.34 5.65 C 19.50 7.35, 17.34 19.87, 18.07 20.93" />
      <path d="M 9.71 2.50 C 17.91 17.07, 19.15 16.90, 15.38 21.88" />
      <path d="M 2.94 4.94 C 15.07 4.76, 11.91 12.62, 16.27 16.95" />
      <path d="M 6.79 5.40 C 6.85 16.79, 7.52 13.08, 20.37 15.07" />
      {children}
    </svg>
  );
});

export default ThixoSaddle;
