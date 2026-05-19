import React from 'react';

export const iconData = {
  "id": "SudoroTribute",
  "name": "SudoroTribute",
  "category": "ZT",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.12 6.18 L 13.12 6.18"
      }
    ],
    [
      "path",
      {
        "d": "M 17.82 9.12 L 17.82 13.12"
      }
    ],
    [
      "path",
      {
        "d": "M 14.88 17.82 L 10.88 17.82"
      }
    ],
    [
      "path",
      {
        "d": "M 6.18 14.88 L 6.18 10.88"
      }
    ]
  ]
};

export const SudoroTribute = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.12 6.18 L 13.12 6.18" />
      <path d="M 17.82 9.12 L 17.82 13.12" />
      <path d="M 14.88 17.82 L 10.88 17.82" />
      <path d="M 6.18 14.88 L 6.18 10.88" />
      {children}
    </svg>
  );
});

export default SudoroTribute;
