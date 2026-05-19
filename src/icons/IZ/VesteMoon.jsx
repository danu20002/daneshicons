import React from 'react';

export const iconData = {
  "id": "VesteMoon",
  "name": "VesteMoon",
  "category": "IZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.16 12.15 Q 7.70 14.30 17.61 5.58"
      }
    ],
    [
      "path",
      {
        "d": "M 4.59 21.88 L 9.85 16.98 L 12.26 2.16 L 21.53 5.51 L 10.53 15.63 L 3.19 14.53 L 8.24 16.69"
      }
    ],
    [
      "path",
      {
        "d": "M 19.29 20.97 Q 8.74 6.03 9.33 3.72"
      }
    ],
    [
      "path",
      {
        "d": "M 18.53 12.46 Q 19.39 3.11 8.74 2.14"
      }
    ],
    [
      "path",
      {
        "d": "M 6.66 17.57 Q 2.65 4.99 17.05 6.67"
      }
    ]
  ]
};

export const VesteMoon = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.16 12.15 Q 7.70 14.30 17.61 5.58" />
      <path d="M 4.59 21.88 L 9.85 16.98 L 12.26 2.16 L 21.53 5.51 L 10.53 15.63 L 3.19 14.53 L 8.24 16.69" />
      <path d="M 19.29 20.97 Q 8.74 6.03 9.33 3.72" />
      <path d="M 18.53 12.46 Q 19.39 3.11 8.74 2.14" />
      <path d="M 6.66 17.57 Q 2.65 4.99 17.05 6.67" />
      {children}
    </svg>
  );
});

export default VesteMoon;
