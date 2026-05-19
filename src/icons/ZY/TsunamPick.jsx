import React from 'react';

export const iconData = {
  "id": "TsunamPick",
  "name": "TsunamPick",
  "category": "ZY",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.17 12.00 a 9.83 9.83 0 1 0 19.67 0 a 9.83 9.83 0 1 0 -19.67 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.73 8.72 a 9.27 2.7814369179282705 0 1 0 18.54 0 a 9.27 2.7814369179282705 0 1 0 -18.54 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.73 15.28 a 9.27 2.7814369179282705 0 1 0 18.54 0 a 9.27 2.7814369179282705 0 1 0 -18.54 0"
      }
    ],
    [
      "path",
      {
        "d": "M 16.92 3.48 A 2 2 0 0 0 16.92 20.52"
      }
    ],
    [
      "path",
      {
        "d": "M 16.92 3.48 A 2 2 0 0 1 16.92 20.52"
      }
    ],
    [
      "path",
      {
        "d": "M 7.08 3.48 A 2 2 0 0 0 7.08 20.52"
      }
    ],
    [
      "path",
      {
        "d": "M 7.08 3.48 A 2 2 0 0 1 7.08 20.52"
      }
    ]
  ]
};

export const TsunamPick = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.17 12.00 a 9.83 9.83 0 1 0 19.67 0 a 9.83 9.83 0 1 0 -19.67 0" />
      <path d="M 2.73 8.72 a 9.27 2.7814369179282705 0 1 0 18.54 0 a 9.27 2.7814369179282705 0 1 0 -18.54 0" />
      <path d="M 2.73 15.28 a 9.27 2.7814369179282705 0 1 0 18.54 0 a 9.27 2.7814369179282705 0 1 0 -18.54 0" />
      <path d="M 16.92 3.48 A 2 2 0 0 0 16.92 20.52" />
      <path d="M 16.92 3.48 A 2 2 0 0 1 16.92 20.52" />
      <path d="M 7.08 3.48 A 2 2 0 0 0 7.08 20.52" />
      <path d="M 7.08 3.48 A 2 2 0 0 1 7.08 20.52" />
      {children}
    </svg>
  );
});

export default TsunamPick;
