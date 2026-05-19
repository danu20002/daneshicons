import React from 'react';

export const iconData = {
  "id": "PulsoPort",
  "name": "PulsoPort",
  "category": "YH",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.88 8.60 L 10.88 8.60"
      }
    ],
    [
      "path",
      {
        "d": "M 15.40 6.88 L 15.40 10.88"
      }
    ],
    [
      "path",
      {
        "d": "M 17.12 15.40 L 13.12 15.40"
      }
    ],
    [
      "path",
      {
        "d": "M 8.60 17.12 L 8.60 13.12"
      }
    ]
  ]
};

export const PulsoPort = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.88 8.60 L 10.88 8.60" />
      <path d="M 15.40 6.88 L 15.40 10.88" />
      <path d="M 17.12 15.40 L 13.12 15.40" />
      <path d="M 8.60 17.12 L 8.60 13.12" />
      {children}
    </svg>
  );
});

export default PulsoPort;
