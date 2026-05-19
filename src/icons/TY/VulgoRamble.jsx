import React from 'react';

export const iconData = {
  "id": "VulgoRamble",
  "name": "VulgoRamble",
  "category": "TY",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.30 13.26 A 6.40 4.81 39 0 1 13.51 5.96"
      }
    ],
    [
      "path",
      {
        "d": "M 3.87 20.62 L 11.54 5.95 L 5.54 7.19 L 8.20 13.80 L 8.72 16.32 L 6.29 11.47"
      }
    ],
    [
      "path",
      {
        "d": "M 9.19 7.67 C 12.78 18.81, 20.35 21.22, 17.55 11.92"
      }
    ],
    [
      "path",
      {
        "d": "M 5.14 10.23 L 2.33 16.56 L 17.82 9.95 L 6.73 16.59 L 6.12 21.80 L 6.36 17.23 L 3.78 9.29 L 3.33 16.86"
      }
    ],
    [
      "path",
      {
        "d": "M 4.55 15.43 A 4.88 5.42 85 0 1 5.89 8.66"
      }
    ],
    [
      "path",
      {
        "d": "M 19.67 10.32 Q 19.66 7.02 13.72 10.03"
      }
    ]
  ]
};

export const VulgoRamble = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.30 13.26 A 6.40 4.81 39 0 1 13.51 5.96" />
      <path d="M 3.87 20.62 L 11.54 5.95 L 5.54 7.19 L 8.20 13.80 L 8.72 16.32 L 6.29 11.47" />
      <path d="M 9.19 7.67 C 12.78 18.81, 20.35 21.22, 17.55 11.92" />
      <path d="M 5.14 10.23 L 2.33 16.56 L 17.82 9.95 L 6.73 16.59 L 6.12 21.80 L 6.36 17.23 L 3.78 9.29 L 3.33 16.86" />
      <path d="M 4.55 15.43 A 4.88 5.42 85 0 1 5.89 8.66" />
      <path d="M 19.67 10.32 Q 19.66 7.02 13.72 10.03" />
      {children}
    </svg>
  );
});

export default VulgoRamble;
