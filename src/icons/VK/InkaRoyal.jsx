import React from 'react';

export const iconData = {
  "id": "InkaRoyal",
  "name": "InkaRoyal",
  "category": "VK",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.23 11.65 L 21.77 19.67 L 10.65 10.65"
      }
    ],
    [
      "path",
      {
        "d": "M 7.61 10.11 L 7.95 21.86 L 16.55 20.19 L 8.81 6.12 L 17.71 21.83 L 10.25 17.32"
      }
    ],
    [
      "path",
      {
        "d": "M 7.70 11.16 Q 17.77 12.45 15.69 17.49"
      }
    ]
  ]
};

export const InkaRoyal = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.23 11.65 L 21.77 19.67 L 10.65 10.65" />
      <path d="M 7.61 10.11 L 7.95 21.86 L 16.55 20.19 L 8.81 6.12 L 17.71 21.83 L 10.25 17.32" />
      <path d="M 7.70 11.16 Q 17.77 12.45 15.69 17.49" />
      {children}
    </svg>
  );
});

export default InkaRoyal;
