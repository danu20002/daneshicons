import React from 'react';

export const iconData = {
  "id": "VeneroLodge",
  "name": "VeneroLodge",
  "category": "KP",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.97 12.00 a 8.03 8.03 0 1 0 16.06 0 a 8.03 8.03 0 1 0 -16.06 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.04 7.98 a 6.96 2.0865009361685853 0 1 0 13.91 0 a 6.96 2.0865009361685853 0 1 0 -13.91 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.97 12.00 a 8.03 2.409283754322678 0 1 0 16.06 0 a 8.03 2.409283754322678 0 1 0 -16.06 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.04 16.02 a 6.96 2.0865009361685853 0 1 0 13.91 0 a 6.96 2.0865009361685853 0 1 0 -13.91 0"
      }
    ],
    [
      "path",
      {
        "d": "M 17.68 6.32 A 2 2 0 0 0 17.68 17.68"
      }
    ],
    [
      "path",
      {
        "d": "M 17.68 6.32 A 2 2 0 0 1 17.68 17.68"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.97 A 2 2 0 0 0 12.00 20.03"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.97 A 2 2 0 0 1 12.00 20.03"
      }
    ],
    [
      "path",
      {
        "d": "M 6.32 6.32 A 2 2 0 0 0 6.32 17.68"
      }
    ],
    [
      "path",
      {
        "d": "M 6.32 6.32 A 2 2 0 0 1 6.32 17.68"
      }
    ]
  ]
};

export const VeneroLodge = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.97 12.00 a 8.03 8.03 0 1 0 16.06 0 a 8.03 8.03 0 1 0 -16.06 0" />
      <path d="M 5.04 7.98 a 6.96 2.0865009361685853 0 1 0 13.91 0 a 6.96 2.0865009361685853 0 1 0 -13.91 0" />
      <path d="M 3.97 12.00 a 8.03 2.409283754322678 0 1 0 16.06 0 a 8.03 2.409283754322678 0 1 0 -16.06 0" />
      <path d="M 5.04 16.02 a 6.96 2.0865009361685853 0 1 0 13.91 0 a 6.96 2.0865009361685853 0 1 0 -13.91 0" />
      <path d="M 17.68 6.32 A 2 2 0 0 0 17.68 17.68" />
      <path d="M 17.68 6.32 A 2 2 0 0 1 17.68 17.68" />
      <path d="M 12.00 3.97 A 2 2 0 0 0 12.00 20.03" />
      <path d="M 12.00 3.97 A 2 2 0 0 1 12.00 20.03" />
      <path d="M 6.32 6.32 A 2 2 0 0 0 6.32 17.68" />
      <path d="M 6.32 6.32 A 2 2 0 0 1 6.32 17.68" />
      {children}
    </svg>
  );
});

export default VeneroLodge;
