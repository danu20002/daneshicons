import React from 'react';

export const iconData = {
  "id": "SphingoLeg",
  "name": "SphingoLeg",
  "category": "EP",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.45 19.73 A 2.34 2.09 53 0 1 16.49 7.98"
      }
    ],
    [
      "path",
      {
        "d": "M 11.91 6.35 L 17.24 6.94 L 8.66 20.10 L 9.50 17.80 L 20.24 2.77 L 13.69 4.94"
      }
    ],
    [
      "path",
      {
        "d": "M 7.58 14.03 L 7.84 6.71"
      }
    ],
    [
      "path",
      {
        "d": "M 10.69 14.54 A 2.67 5.77 90 0 1 13.87 8.90"
      }
    ],
    [
      "path",
      {
        "d": "M 11.99 19.28 Q 21.18 2.47 20.37 5.68"
      }
    ]
  ]
};

export const SphingoLeg = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.45 19.73 A 2.34 2.09 53 0 1 16.49 7.98" />
      <path d="M 11.91 6.35 L 17.24 6.94 L 8.66 20.10 L 9.50 17.80 L 20.24 2.77 L 13.69 4.94" />
      <path d="M 7.58 14.03 L 7.84 6.71" />
      <path d="M 10.69 14.54 A 2.67 5.77 90 0 1 13.87 8.90" />
      <path d="M 11.99 19.28 Q 21.18 2.47 20.37 5.68" />
      {children}
    </svg>
  );
});

export default SphingoLeg;
