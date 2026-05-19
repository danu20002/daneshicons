import React from 'react';

export const iconData = {
  "id": "ScudoMacro",
  "name": "ScudoMacro",
  "category": "BP",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.00 13.80 L 6.60 13.80"
      }
    ],
    [
      "path",
      {
        "d": "M 6.60 6.60 L 10.20 6.60"
      }
    ],
    [
      "path",
      {
        "d": "M 10.20 10.20 L 10.20 13.80"
      }
    ],
    [
      "path",
      {
        "d": "M 13.80 3.00 L 13.80 6.60"
      }
    ],
    [
      "path",
      {
        "d": "M 10.20 6.60 L 13.80 6.60"
      }
    ],
    [
      "path",
      {
        "d": "M 13.80 6.60 L 13.80 10.20"
      }
    ],
    [
      "path",
      {
        "d": "M 13.80 10.20 L 13.80 13.80"
      }
    ],
    [
      "path",
      {
        "d": "M 10.20 13.80 L 13.80 13.80"
      }
    ],
    [
      "path",
      {
        "d": "M 13.80 13.80 L 13.80 17.40"
      }
    ],
    [
      "path",
      {
        "d": "M 17.40 3.00 L 17.40 6.60"
      }
    ],
    [
      "path",
      {
        "d": "M 17.40 13.80 L 17.40 17.40"
      }
    ],
    [
      "path",
      {
        "d": "M 17.40 10.20 L 21.00 10.20"
      }
    ],
    [
      "path",
      {
        "d": "M 17.40 17.40 L 21.00 17.40"
      }
    ],
    [
      "path",
      {
        "d": "M 3.00 3.00 L 21.00 3.00 L 21.00 21.00 L 3.00 21.00 Z"
      }
    ]
  ]
};

export const ScudoMacro = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.00 13.80 L 6.60 13.80" />
      <path d="M 6.60 6.60 L 10.20 6.60" />
      <path d="M 10.20 10.20 L 10.20 13.80" />
      <path d="M 13.80 3.00 L 13.80 6.60" />
      <path d="M 10.20 6.60 L 13.80 6.60" />
      <path d="M 13.80 6.60 L 13.80 10.20" />
      <path d="M 13.80 10.20 L 13.80 13.80" />
      <path d="M 10.20 13.80 L 13.80 13.80" />
      <path d="M 13.80 13.80 L 13.80 17.40" />
      <path d="M 17.40 3.00 L 17.40 6.60" />
      <path d="M 17.40 13.80 L 17.40 17.40" />
      <path d="M 17.40 10.20 L 21.00 10.20" />
      <path d="M 17.40 17.40 L 21.00 17.40" />
      <path d="M 3.00 3.00 L 21.00 3.00 L 21.00 21.00 L 3.00 21.00 Z" />
      {children}
    </svg>
  );
});

export default ScudoMacro;
