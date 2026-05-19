import React from 'react';

export const iconData = {
  "id": "ZurigoMajesty",
  "name": "ZurigoMajesty",
  "category": "XA",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.20 12.00 a 9.80 9.80 0 1 0 19.60 0 a 9.80 9.80 0 1 0 -19.60 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.76 8.73 a 9.24 2.7725434175155397 0 1 0 18.48 0 a 9.24 2.7725434175155397 0 1 0 -18.48 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.76 15.27 a 9.24 2.7725434175155397 0 1 0 18.48 0 a 9.24 2.7725434175155397 0 1 0 -18.48 0"
      }
    ],
    [
      "path",
      {
        "d": "M 18.93 5.07 A 2 2 0 0 0 18.93 18.93"
      }
    ],
    [
      "path",
      {
        "d": "M 18.93 5.07 A 2 2 0 0 1 18.93 18.93"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.20 A 2 2 0 0 0 12.00 21.80"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.20 A 2 2 0 0 1 12.00 21.80"
      }
    ],
    [
      "path",
      {
        "d": "M 5.07 5.07 A 2 2 0 0 0 5.07 18.93"
      }
    ],
    [
      "path",
      {
        "d": "M 5.07 5.07 A 2 2 0 0 1 5.07 18.93"
      }
    ]
  ]
};

export const ZurigoMajesty = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.20 12.00 a 9.80 9.80 0 1 0 19.60 0 a 9.80 9.80 0 1 0 -19.60 0" />
      <path d="M 2.76 8.73 a 9.24 2.7725434175155397 0 1 0 18.48 0 a 9.24 2.7725434175155397 0 1 0 -18.48 0" />
      <path d="M 2.76 15.27 a 9.24 2.7725434175155397 0 1 0 18.48 0 a 9.24 2.7725434175155397 0 1 0 -18.48 0" />
      <path d="M 18.93 5.07 A 2 2 0 0 0 18.93 18.93" />
      <path d="M 18.93 5.07 A 2 2 0 0 1 18.93 18.93" />
      <path d="M 12.00 2.20 A 2 2 0 0 0 12.00 21.80" />
      <path d="M 12.00 2.20 A 2 2 0 0 1 12.00 21.80" />
      <path d="M 5.07 5.07 A 2 2 0 0 0 5.07 18.93" />
      <path d="M 5.07 5.07 A 2 2 0 0 1 5.07 18.93" />
      {children}
    </svg>
  );
});

export default ZurigoMajesty;
