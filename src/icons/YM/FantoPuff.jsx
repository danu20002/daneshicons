import React from 'react';

export const iconData = {
  "id": "FantoPuff",
  "name": "FantoPuff",
  "category": "YM",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.26 12.00 a 9.74 9.74 0 1 0 19.47 0 a 9.74 9.74 0 1 0 -19.47 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.21 6.16 a 7.79 2.3368880434334276 0 1 0 15.58 0 a 7.79 2.3368880434334276 0 1 0 -15.58 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.46 10.05 a 9.54 2.862091646211416 0 1 0 19.08 0 a 9.54 2.862091646211416 0 1 0 -19.08 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.46 13.95 a 9.54 2.862091646211416 0 1 0 19.08 0 a 9.54 2.862091646211416 0 1 0 -19.08 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.21 17.84 a 7.79 2.336888043433428 0 1 0 15.58 0 a 7.79 2.336888043433428 0 1 0 -15.58 0"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.26 A 2 2 0 0 0 12.00 21.74"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.26 A 2 2 0 0 1 12.00 21.74"
      }
    ]
  ]
};

export const FantoPuff = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.26 12.00 a 9.74 9.74 0 1 0 19.47 0 a 9.74 9.74 0 1 0 -19.47 0" />
      <path d="M 4.21 6.16 a 7.79 2.3368880434334276 0 1 0 15.58 0 a 7.79 2.3368880434334276 0 1 0 -15.58 0" />
      <path d="M 2.46 10.05 a 9.54 2.862091646211416 0 1 0 19.08 0 a 9.54 2.862091646211416 0 1 0 -19.08 0" />
      <path d="M 2.46 13.95 a 9.54 2.862091646211416 0 1 0 19.08 0 a 9.54 2.862091646211416 0 1 0 -19.08 0" />
      <path d="M 4.21 17.84 a 7.79 2.336888043433428 0 1 0 15.58 0 a 7.79 2.336888043433428 0 1 0 -15.58 0" />
      <path d="M 12.00 2.26 A 2 2 0 0 0 12.00 21.74" />
      <path d="M 12.00 2.26 A 2 2 0 0 1 12.00 21.74" />
      {children}
    </svg>
  );
});

export default FantoPuff;
