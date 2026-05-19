import React from 'react';

export const iconData = {
  "id": "SestoPeach",
  "name": "SestoPeach",
  "category": "BR",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.60 4.19 L 20.78 17.46 L 9.31 7.07 L 6.31 10.50 L 6.91 10.56"
      }
    ],
    [
      "path",
      {
        "d": "M 18.42 21.19 C 14.99 7.58, 14.77 16.12, 12.25 19.45"
      }
    ],
    [
      "path",
      {
        "d": "M 16.23 6.80 A 5.04 2.88 126 0 1 19.89 18.99"
      }
    ],
    [
      "path",
      {
        "d": "M 16.90 19.36 Q 4.93 20.79 20.27 5.88"
      }
    ]
  ]
};

export const SestoPeach = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.60 4.19 L 20.78 17.46 L 9.31 7.07 L 6.31 10.50 L 6.91 10.56" />
      <path d="M 18.42 21.19 C 14.99 7.58, 14.77 16.12, 12.25 19.45" />
      <path d="M 16.23 6.80 A 5.04 2.88 126 0 1 19.89 18.99" />
      <path d="M 16.90 19.36 Q 4.93 20.79 20.27 5.88" />
      {children}
    </svg>
  );
});

export default SestoPeach;
