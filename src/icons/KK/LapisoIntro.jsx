import React from 'react';

export const iconData = {
  "id": "LapisoIntro",
  "name": "LapisoIntro",
  "category": "KK",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.35 12.00 L 20.65 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.35 L 12.00 20.65"
      }
    ],
    [
      "path",
      {
        "d": "M 1.29 12.00 a 10.71 10.71 0 1 0 21.42 0 a 10.71 10.71 0 1 0 -21.42 0"
      }
    ]
  ]
};

export const LapisoIntro = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.35 12.00 L 20.65 12.00" />
      <path d="M 12.00 3.35 L 12.00 20.65" />
      <path d="M 1.29 12.00 a 10.71 10.71 0 1 0 21.42 0 a 10.71 10.71 0 1 0 -21.42 0" />
      {children}
    </svg>
  );
});

export default LapisoIntro;
