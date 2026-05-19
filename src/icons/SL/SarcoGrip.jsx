import React from 'react';

export const iconData = {
  "id": "SarcoGrip",
  "name": "SarcoGrip",
  "category": "SL",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.10 12.00 Q 14.12 12.57 19.01 16.05"
      }
    ],
    [
      "path",
      {
        "d": "M 19.01 16.05 Q 13.55 13.55 16.05 19.01"
      }
    ],
    [
      "path",
      {
        "d": "M 16.05 19.01 Q 12.57 14.12 12.00 20.10"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 20.10 Q 11.43 14.12 7.95 19.01"
      }
    ],
    [
      "path",
      {
        "d": "M 7.95 19.01 Q 10.45 13.55 4.99 16.05"
      }
    ],
    [
      "path",
      {
        "d": "M 4.99 16.05 Q 9.88 12.57 3.90 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 3.90 12.00 Q 9.88 11.43 4.99 7.95"
      }
    ],
    [
      "path",
      {
        "d": "M 4.99 7.95 Q 10.45 10.45 7.95 4.99"
      }
    ],
    [
      "path",
      {
        "d": "M 7.95 4.99 Q 11.43 9.88 12.00 3.90"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.90 Q 12.57 9.88 16.05 4.99"
      }
    ],
    [
      "path",
      {
        "d": "M 16.05 4.99 Q 13.55 10.45 19.01 7.95"
      }
    ],
    [
      "path",
      {
        "d": "M 19.01 7.95 Q 14.12 11.43 20.10 12.00"
      }
    ]
  ]
};

export const SarcoGrip = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.10 12.00 Q 14.12 12.57 19.01 16.05" />
      <path d="M 19.01 16.05 Q 13.55 13.55 16.05 19.01" />
      <path d="M 16.05 19.01 Q 12.57 14.12 12.00 20.10" />
      <path d="M 12.00 20.10 Q 11.43 14.12 7.95 19.01" />
      <path d="M 7.95 19.01 Q 10.45 13.55 4.99 16.05" />
      <path d="M 4.99 16.05 Q 9.88 12.57 3.90 12.00" />
      <path d="M 3.90 12.00 Q 9.88 11.43 4.99 7.95" />
      <path d="M 4.99 7.95 Q 10.45 10.45 7.95 4.99" />
      <path d="M 7.95 4.99 Q 11.43 9.88 12.00 3.90" />
      <path d="M 12.00 3.90 Q 12.57 9.88 16.05 4.99" />
      <path d="M 16.05 4.99 Q 13.55 10.45 19.01 7.95" />
      <path d="M 19.01 7.95 Q 14.12 11.43 20.10 12.00" />
      {children}
    </svg>
  );
});

export default SarcoGrip;
