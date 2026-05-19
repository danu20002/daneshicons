import React from 'react';

export const iconData = {
  "id": "ZenitFight",
  "name": "ZenitFight",
  "category": "XK",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.39 8.60 C 11.08 6.43, 8.35 15.91, 20.79 15.68"
      }
    ],
    [
      "path",
      {
        "d": "M 8.72 7.44 C 4.44 12.80, 17.74 18.62, 15.65 20.34"
      }
    ],
    [
      "path",
      {
        "d": "M 7.36 5.58 C 6.65 17.36, 11.97 17.50, 18.19 18.27"
      }
    ],
    [
      "path",
      {
        "d": "M 9.55 7.42 C 6.99 4.98, 6.48 14.64, 14.58 18.67"
      }
    ]
  ]
};

export const ZenitFight = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.39 8.60 C 11.08 6.43, 8.35 15.91, 20.79 15.68" />
      <path d="M 8.72 7.44 C 4.44 12.80, 17.74 18.62, 15.65 20.34" />
      <path d="M 7.36 5.58 C 6.65 17.36, 11.97 17.50, 18.19 18.27" />
      <path d="M 9.55 7.42 C 6.99 4.98, 6.48 14.64, 14.58 18.67" />
      {children}
    </svg>
  );
});

export default ZenitFight;
