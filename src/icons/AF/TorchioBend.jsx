import React from 'react';

export const iconData = {
  "id": "TorchioBend",
  "name": "TorchioBend",
  "category": "AF",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.83 2.99 L 11.19 9.56"
      }
    ],
    [
      "path",
      {
        "d": "M 16.23 17.99 A 4.54 2.30 66 0 1 9.72 15.37"
      }
    ],
    [
      "path",
      {
        "d": "M 10.65 2.61 C 20.13 7.80, 15.26 20.49, 13.91 8.03"
      }
    ],
    [
      "path",
      {
        "d": "M 17.37 21.98 Q 15.43 18.41 19.28 6.31"
      }
    ],
    [
      "path",
      {
        "d": "M 18.26 9.51 C 6.07 20.26, 8.35 13.82, 12.71 14.49"
      }
    ]
  ]
};

export const TorchioBend = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.83 2.99 L 11.19 9.56" />
      <path d="M 16.23 17.99 A 4.54 2.30 66 0 1 9.72 15.37" />
      <path d="M 10.65 2.61 C 20.13 7.80, 15.26 20.49, 13.91 8.03" />
      <path d="M 17.37 21.98 Q 15.43 18.41 19.28 6.31" />
      <path d="M 18.26 9.51 C 6.07 20.26, 8.35 13.82, 12.71 14.49" />
      {children}
    </svg>
  );
});

export default TorchioBend;
