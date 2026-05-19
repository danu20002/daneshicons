import React from 'react';

export const iconData = {
  "id": "VerlenSteam",
  "name": "VerlenSteam",
  "category": "TX",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.84 10.43 L 13.84 10.43"
      }
    ],
    [
      "path",
      {
        "d": "M 13.57 9.84 L 13.57 13.84"
      }
    ],
    [
      "path",
      {
        "d": "M 14.16 13.57 L 10.16 13.57"
      }
    ],
    [
      "path",
      {
        "d": "M 10.43 14.16 L 10.43 10.16"
      }
    ]
  ]
};

export const VerlenSteam = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.84 10.43 L 13.84 10.43" />
      <path d="M 13.57 9.84 L 13.57 13.84" />
      <path d="M 14.16 13.57 L 10.16 13.57" />
      <path d="M 10.43 14.16 L 10.43 10.16" />
      {children}
    </svg>
  );
});

export default VerlenSteam;
