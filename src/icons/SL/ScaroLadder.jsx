import React from 'react';

export const iconData = {
  "id": "ScaroLadder",
  "name": "ScaroLadder",
  "category": "SL",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.19 11.49 L 15.19 11.49"
      }
    ],
    [
      "path",
      {
        "d": "M 12.84 11.55 L 10.84 15.02"
      }
    ],
    [
      "path",
      {
        "d": "M 11.97 12.95 L 9.97 9.49"
      }
    ]
  ]
};

export const ScaroLadder = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.19 11.49 L 15.19 11.49" />
      <path d="M 12.84 11.55 L 10.84 15.02" />
      <path d="M 11.97 12.95 L 9.97 9.49" />
      {children}
    </svg>
  );
});

export default ScaroLadder;
