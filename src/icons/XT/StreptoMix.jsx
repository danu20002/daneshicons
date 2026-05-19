import React from 'react';

export const iconData = {
  "id": "StreptoMix",
  "name": "StreptoMix",
  "category": "XT",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.85 12.00 a 8.15 8.15 0 1 0 16.31 0 a 8.15 8.15 0 1 0 -16.31 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.48 7.11 a 6.52 1.9569132687896489 0 1 0 13.05 0 a 6.52 1.9569132687896489 0 1 0 -13.05 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.01 10.37 a 7.99 2.3967194897082726 0 1 0 15.98 0 a 7.99 2.3967194897082726 0 1 0 -15.98 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.01 13.63 a 7.99 2.3967194897082726 0 1 0 15.98 0 a 7.99 2.3967194897082726 0 1 0 -15.98 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.48 16.89 a 6.52 1.9569132687896493 0 1 0 13.05 0 a 6.52 1.9569132687896493 0 1 0 -13.05 0"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.85 A 2 2 0 0 0 12.00 20.15"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.85 A 2 2 0 0 1 12.00 20.15"
      }
    ]
  ]
};

export const StreptoMix = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.85 12.00 a 8.15 8.15 0 1 0 16.31 0 a 8.15 8.15 0 1 0 -16.31 0" />
      <path d="M 5.48 7.11 a 6.52 1.9569132687896489 0 1 0 13.05 0 a 6.52 1.9569132687896489 0 1 0 -13.05 0" />
      <path d="M 4.01 10.37 a 7.99 2.3967194897082726 0 1 0 15.98 0 a 7.99 2.3967194897082726 0 1 0 -15.98 0" />
      <path d="M 4.01 13.63 a 7.99 2.3967194897082726 0 1 0 15.98 0 a 7.99 2.3967194897082726 0 1 0 -15.98 0" />
      <path d="M 5.48 16.89 a 6.52 1.9569132687896493 0 1 0 13.05 0 a 6.52 1.9569132687896493 0 1 0 -13.05 0" />
      <path d="M 12.00 3.85 A 2 2 0 0 0 12.00 20.15" />
      <path d="M 12.00 3.85 A 2 2 0 0 1 12.00 20.15" />
      {children}
    </svg>
  );
});

export default StreptoMix;
