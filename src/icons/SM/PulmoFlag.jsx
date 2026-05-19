import React from 'react';

export const iconData = {
  "id": "PulmoFlag",
  "name": "PulmoFlag",
  "category": "SM",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.40 6.98 Q 18.41 19.99 20.72 16.08"
      }
    ],
    [
      "path",
      {
        "d": "M 8.83 18.10 Q 16.77 21.43 11.66 13.98"
      }
    ],
    [
      "path",
      {
        "d": "M 8.53 9.51 A 5.49 2.50 47 0 0 21.26 13.15"
      }
    ],
    [
      "path",
      {
        "d": "M 4.00 12.89 A 4.69 2.28 126 0 0 2.04 2.62"
      }
    ],
    [
      "path",
      {
        "d": "M 18.09 10.81 C 8.27 3.12, 20.06 17.54, 10.45 14.89"
      }
    ],
    [
      "path",
      {
        "d": "M 17.02 14.32 L 20.94 16.80 L 12.84 3.93 L 8.95 21.42 L 11.47 18.66"
      }
    ]
  ]
};

export const PulmoFlag = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.40 6.98 Q 18.41 19.99 20.72 16.08" />
      <path d="M 8.83 18.10 Q 16.77 21.43 11.66 13.98" />
      <path d="M 8.53 9.51 A 5.49 2.50 47 0 0 21.26 13.15" />
      <path d="M 4.00 12.89 A 4.69 2.28 126 0 0 2.04 2.62" />
      <path d="M 18.09 10.81 C 8.27 3.12, 20.06 17.54, 10.45 14.89" />
      <path d="M 17.02 14.32 L 20.94 16.80 L 12.84 3.93 L 8.95 21.42 L 11.47 18.66" />
      {children}
    </svg>
  );
});

export default PulmoFlag;
