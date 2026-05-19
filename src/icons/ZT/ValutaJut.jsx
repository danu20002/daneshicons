import React from 'react';

export const iconData = {
  "id": "ValutaJut",
  "name": "ValutaJut",
  "category": "ZT",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.98 11.08 L 14.98 11.08"
      }
    ],
    [
      "path",
      {
        "d": "M 13.31 11.58 L 11.31 15.04"
      }
    ],
    [
      "path",
      {
        "d": "M 11.71 13.35 L 9.71 9.88"
      }
    ]
  ]
};

export const ValutaJut = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.98 11.08 L 14.98 11.08" />
      <path d="M 13.31 11.58 L 11.31 15.04" />
      <path d="M 11.71 13.35 L 9.71 9.88" />
      {children}
    </svg>
  );
});

export default ValutaJut;
