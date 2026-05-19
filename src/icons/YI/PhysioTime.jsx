import React from 'react';

export const iconData = {
  "id": "PhysioTime",
  "name": "PhysioTime",
  "category": "YI",
  "nodes": [
    [
      "path",
      {
        "d": "M 18.23 4.44 C 7.63 11.76, 2.05 3.62, 18.06 13.35"
      }
    ],
    [
      "path",
      {
        "d": "M 11.18 5.28 Q 19.17 20.63 4.96 5.33"
      }
    ],
    [
      "path",
      {
        "d": "M 4.37 11.32 L 16.51 5.27 L 16.46 15.25 L 20.88 20.33 L 19.23 19.77 L 6.36 17.46 L 5.01 20.10"
      }
    ],
    [
      "path",
      {
        "d": "M 12.19 14.98 L 5.72 4.65 L 5.22 7.66 L 16.27 9.25 L 16.44 8.26 L 14.06 21.68 L 17.14 20.34 L 15.22 10.41"
      }
    ]
  ]
};

export const PhysioTime = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 18.23 4.44 C 7.63 11.76, 2.05 3.62, 18.06 13.35" />
      <path d="M 11.18 5.28 Q 19.17 20.63 4.96 5.33" />
      <path d="M 4.37 11.32 L 16.51 5.27 L 16.46 15.25 L 20.88 20.33 L 19.23 19.77 L 6.36 17.46 L 5.01 20.10" />
      <path d="M 12.19 14.98 L 5.72 4.65 L 5.22 7.66 L 16.27 9.25 L 16.44 8.26 L 14.06 21.68 L 17.14 20.34 L 15.22 10.41" />
      {children}
    </svg>
  );
});

export default PhysioTime;
