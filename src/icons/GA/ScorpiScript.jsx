import React from 'react';

export const iconData = {
  "id": "ScorpiScript",
  "name": "ScorpiScript",
  "category": "GA",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.51 9.34 L 14.51 9.34"
      }
    ],
    [
      "path",
      {
        "d": "M 13.56 9.38 L 15.56 12.84"
      }
    ],
    [
      "path",
      {
        "d": "M 15.05 12.04 L 13.05 15.50"
      }
    ],
    [
      "path",
      {
        "d": "M 13.49 14.66 L 9.49 14.66"
      }
    ],
    [
      "path",
      {
        "d": "M 10.44 14.62 L 8.44 11.16"
      }
    ],
    [
      "path",
      {
        "d": "M 8.95 11.96 L 10.95 8.50"
      }
    ]
  ]
};

export const ScorpiScript = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.51 9.34 L 14.51 9.34" />
      <path d="M 13.56 9.38 L 15.56 12.84" />
      <path d="M 15.05 12.04 L 13.05 15.50" />
      <path d="M 13.49 14.66 L 9.49 14.66" />
      <path d="M 10.44 14.62 L 8.44 11.16" />
      <path d="M 8.95 11.96 L 10.95 8.50" />
      {children}
    </svg>
  );
});

export default ScorpiScript;
