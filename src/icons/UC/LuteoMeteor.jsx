import React from 'react';

export const iconData = {
  "id": "LuteoMeteor",
  "name": "LuteoMeteor",
  "category": "UC",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.19 12.00 a 9.81 9.81 0 1 0 19.62 0 a 9.81 9.81 0 1 0 -19.62 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.75 8.73 a 9.25 2.7749652536660636 0 1 0 18.50 0 a 9.25 2.7749652536660636 0 1 0 -18.50 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.75 15.27 a 9.25 2.7749652536660636 0 1 0 18.50 0 a 9.25 2.7749652536660636 0 1 0 -18.50 0"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.19 A 2 2 0 0 0 12.00 21.81"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.19 A 2 2 0 0 1 12.00 21.81"
      }
    ]
  ]
};

export const LuteoMeteor = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.19 12.00 a 9.81 9.81 0 1 0 19.62 0 a 9.81 9.81 0 1 0 -19.62 0" />
      <path d="M 2.75 8.73 a 9.25 2.7749652536660636 0 1 0 18.50 0 a 9.25 2.7749652536660636 0 1 0 -18.50 0" />
      <path d="M 2.75 15.27 a 9.25 2.7749652536660636 0 1 0 18.50 0 a 9.25 2.7749652536660636 0 1 0 -18.50 0" />
      <path d="M 12.00 2.19 A 2 2 0 0 0 12.00 21.81" />
      <path d="M 12.00 2.19 A 2 2 0 0 1 12.00 21.81" />
      {children}
    </svg>
  );
});

export default LuteoMeteor;
