import React from 'react';

export const iconData = {
  "id": "SequenSevere",
  "name": "SequenSevere",
  "category": "MP",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.05 7.48 L 13.05 7.48"
      }
    ],
    [
      "path",
      {
        "d": "M 14.44 7.19 L 16.44 10.65"
      }
    ],
    [
      "path",
      {
        "d": "M 17.38 11.70 L 15.38 15.17"
      }
    ],
    [
      "path",
      {
        "d": "M 14.95 16.52 L 10.95 16.52"
      }
    ],
    [
      "path",
      {
        "d": "M 9.56 16.81 L 7.56 13.35"
      }
    ],
    [
      "path",
      {
        "d": "M 6.62 12.30 L 8.62 8.83"
      }
    ]
  ]
};

export const SequenSevere = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.05 7.48 L 13.05 7.48" />
      <path d="M 14.44 7.19 L 16.44 10.65" />
      <path d="M 17.38 11.70 L 15.38 15.17" />
      <path d="M 14.95 16.52 L 10.95 16.52" />
      <path d="M 9.56 16.81 L 7.56 13.35" />
      <path d="M 6.62 12.30 L 8.62 8.83" />
      {children}
    </svg>
  );
});

export default SequenSevere;
