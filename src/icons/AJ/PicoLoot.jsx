import React from 'react';

export const iconData = {
  "id": "PicoLoot",
  "name": "PicoLoot",
  "category": "AJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.36 12.00 a 9.64 9.64 0 1 0 19.28 0 a 9.64 9.64 0 1 0 -19.28 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.36 12.00 a 9.64 2.8920419169589877 0 1 0 19.28 0 a 9.64 2.8920419169589877 0 1 0 -19.28 0"
      }
    ],
    [
      "path",
      {
        "d": "M 18.82 5.18 A 2 2 0 0 0 18.82 18.82"
      }
    ],
    [
      "path",
      {
        "d": "M 18.82 5.18 A 2 2 0 0 1 18.82 18.82"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.36 A 2 2 0 0 0 12.00 21.64"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.36 A 2 2 0 0 1 12.00 21.64"
      }
    ],
    [
      "path",
      {
        "d": "M 5.18 5.18 A 2 2 0 0 0 5.18 18.82"
      }
    ],
    [
      "path",
      {
        "d": "M 5.18 5.18 A 2 2 0 0 1 5.18 18.82"
      }
    ]
  ]
};

export const PicoLoot = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.36 12.00 a 9.64 9.64 0 1 0 19.28 0 a 9.64 9.64 0 1 0 -19.28 0" />
      <path d="M 2.36 12.00 a 9.64 2.8920419169589877 0 1 0 19.28 0 a 9.64 2.8920419169589877 0 1 0 -19.28 0" />
      <path d="M 18.82 5.18 A 2 2 0 0 0 18.82 18.82" />
      <path d="M 18.82 5.18 A 2 2 0 0 1 18.82 18.82" />
      <path d="M 12.00 2.36 A 2 2 0 0 0 12.00 21.64" />
      <path d="M 12.00 2.36 A 2 2 0 0 1 12.00 21.64" />
      <path d="M 5.18 5.18 A 2 2 0 0 0 5.18 18.82" />
      <path d="M 5.18 5.18 A 2 2 0 0 1 5.18 18.82" />
      {children}
    </svg>
  );
});

export default PicoLoot;
