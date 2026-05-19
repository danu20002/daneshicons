import React from 'react';

export const iconData = {
  "id": "SoloUrgent",
  "name": "SoloUrgent",
  "category": "IK",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.08 12.00 a 8.92 8.92 0 1 0 17.85 0 a 8.92 8.92 0 1 0 -17.85 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.86 6.65 a 7.14 2.1419568425416946 0 1 0 14.28 0 a 7.14 2.1419568425416946 0 1 0 -14.28 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.26 10.22 a 8.74 2.623350657645062 0 1 0 17.49 0 a 8.74 2.623350657645062 0 1 0 -17.49 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.26 13.78 a 8.74 2.623350657645062 0 1 0 17.49 0 a 8.74 2.623350657645062 0 1 0 -17.49 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.86 17.35 a 7.14 2.141956842541695 0 1 0 14.28 0 a 7.14 2.141956842541695 0 1 0 -14.28 0"
      }
    ],
    [
      "path",
      {
        "d": "M 16.46 4.27 A 2 2 0 0 0 16.46 19.73"
      }
    ],
    [
      "path",
      {
        "d": "M 16.46 4.27 A 2 2 0 0 1 16.46 19.73"
      }
    ],
    [
      "path",
      {
        "d": "M 7.54 4.27 A 2 2 0 0 0 7.54 19.73"
      }
    ],
    [
      "path",
      {
        "d": "M 7.54 4.27 A 2 2 0 0 1 7.54 19.73"
      }
    ]
  ]
};

export const SoloUrgent = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.08 12.00 a 8.92 8.92 0 1 0 17.85 0 a 8.92 8.92 0 1 0 -17.85 0" />
      <path d="M 4.86 6.65 a 7.14 2.1419568425416946 0 1 0 14.28 0 a 7.14 2.1419568425416946 0 1 0 -14.28 0" />
      <path d="M 3.26 10.22 a 8.74 2.623350657645062 0 1 0 17.49 0 a 8.74 2.623350657645062 0 1 0 -17.49 0" />
      <path d="M 3.26 13.78 a 8.74 2.623350657645062 0 1 0 17.49 0 a 8.74 2.623350657645062 0 1 0 -17.49 0" />
      <path d="M 4.86 17.35 a 7.14 2.141956842541695 0 1 0 14.28 0 a 7.14 2.141956842541695 0 1 0 -14.28 0" />
      <path d="M 16.46 4.27 A 2 2 0 0 0 16.46 19.73" />
      <path d="M 16.46 4.27 A 2 2 0 0 1 16.46 19.73" />
      <path d="M 7.54 4.27 A 2 2 0 0 0 7.54 19.73" />
      <path d="M 7.54 4.27 A 2 2 0 0 1 7.54 19.73" />
      {children}
    </svg>
  );
});

export default SoloUrgent;
