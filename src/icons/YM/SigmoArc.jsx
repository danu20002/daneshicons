import React from 'react';

export const iconData = {
  "id": "SigmoArc",
  "name": "SigmoArc",
  "category": "YM",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.56 12.00 a 9.44 9.44 0 1 0 18.87 0 a 9.44 9.44 0 1 0 -18.87 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.83 7.28 a 8.17 2.4517781813231627 0 1 0 16.35 0 a 8.17 2.4517781813231627 0 1 0 -16.35 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.56 12.00 a 9.44 2.8310695859603583 0 1 0 18.87 0 a 9.44 2.8310695859603583 0 1 0 -18.87 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.83 16.72 a 8.17 2.4517781813231627 0 1 0 16.35 0 a 8.17 2.4517781813231627 0 1 0 -16.35 0"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.56 A 2 2 0 0 0 12.00 21.44"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.56 A 2 2 0 0 1 12.00 21.44"
      }
    ]
  ]
};

export const SigmoArc = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.56 12.00 a 9.44 9.44 0 1 0 18.87 0 a 9.44 9.44 0 1 0 -18.87 0" />
      <path d="M 3.83 7.28 a 8.17 2.4517781813231627 0 1 0 16.35 0 a 8.17 2.4517781813231627 0 1 0 -16.35 0" />
      <path d="M 2.56 12.00 a 9.44 2.8310695859603583 0 1 0 18.87 0 a 9.44 2.8310695859603583 0 1 0 -18.87 0" />
      <path d="M 3.83 16.72 a 8.17 2.4517781813231627 0 1 0 16.35 0 a 8.17 2.4517781813231627 0 1 0 -16.35 0" />
      <path d="M 12.00 2.56 A 2 2 0 0 0 12.00 21.44" />
      <path d="M 12.00 2.56 A 2 2 0 0 1 12.00 21.44" />
      {children}
    </svg>
  );
});

export default SigmoArc;
