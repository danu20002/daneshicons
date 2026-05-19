import React from 'react';

export const iconData = {
  "id": "SonnoFocus",
  "name": "SonnoFocus",
  "category": "GA",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.45 10.41 L 14.45 10.41"
      }
    ],
    [
      "path",
      {
        "d": "M 12.60 9.87 L 14.60 13.33"
      }
    ],
    [
      "path",
      {
        "d": "M 14.15 11.45 L 12.15 14.92"
      }
    ],
    [
      "path",
      {
        "d": "M 13.55 13.59 L 9.55 13.59"
      }
    ],
    [
      "path",
      {
        "d": "M 11.40 14.13 L 9.40 10.67"
      }
    ],
    [
      "path",
      {
        "d": "M 9.85 12.55 L 11.85 9.08"
      }
    ]
  ]
};

export const SonnoFocus = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.45 10.41 L 14.45 10.41" />
      <path d="M 12.60 9.87 L 14.60 13.33" />
      <path d="M 14.15 11.45 L 12.15 14.92" />
      <path d="M 13.55 13.59 L 9.55 13.59" />
      <path d="M 11.40 14.13 L 9.40 10.67" />
      <path d="M 9.85 12.55 L 11.85 9.08" />
      {children}
    </svg>
  );
});

export default SonnoFocus;
