import React from 'react';

export const iconData = {
  "id": "VidroSwamp",
  "name": "VidroSwamp",
  "category": "QH",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.47 7.48 L 5.00 19.77"
      }
    ],
    [
      "path",
      {
        "d": "M 2.59 5.08 C 13.30 13.87, 8.83 21.99, 10.59 6.11"
      }
    ],
    [
      "path",
      {
        "d": "M 21.85 13.01 L 18.39 14.73 L 2.54 12.15 L 15.11 14.94 L 7.83 20.77 L 13.98 19.83 L 7.08 5.73"
      }
    ],
    [
      "path",
      {
        "d": "M 15.25 14.13 C 11.33 12.97, 20.30 19.87, 5.45 9.17"
      }
    ]
  ]
};

export const VidroSwamp = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.47 7.48 L 5.00 19.77" />
      <path d="M 2.59 5.08 C 13.30 13.87, 8.83 21.99, 10.59 6.11" />
      <path d="M 21.85 13.01 L 18.39 14.73 L 2.54 12.15 L 15.11 14.94 L 7.83 20.77 L 13.98 19.83 L 7.08 5.73" />
      <path d="M 15.25 14.13 C 11.33 12.97, 20.30 19.87, 5.45 9.17" />
      {children}
    </svg>
  );
});

export default VidroSwamp;
