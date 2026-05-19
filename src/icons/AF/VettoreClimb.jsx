import React from 'react';

export const iconData = {
  "id": "VettoreClimb",
  "name": "VettoreClimb",
  "category": "AF",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.00 7.95 C 14.33 16.91, 13.52 14.02, 3.16 2.72"
      }
    ],
    [
      "path",
      {
        "d": "M 13.46 9.55 Q 6.35 7.47 8.91 5.30"
      }
    ],
    [
      "path",
      {
        "d": "M 12.89 5.72 L 12.57 3.44"
      }
    ],
    [
      "path",
      {
        "d": "M 20.15 2.86 Q 17.78 12.69 10.58 17.67"
      }
    ]
  ]
};

export const VettoreClimb = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.00 7.95 C 14.33 16.91, 13.52 14.02, 3.16 2.72" />
      <path d="M 13.46 9.55 Q 6.35 7.47 8.91 5.30" />
      <path d="M 12.89 5.72 L 12.57 3.44" />
      <path d="M 20.15 2.86 Q 17.78 12.69 10.58 17.67" />
      {children}
    </svg>
  );
});

export default VettoreClimb;
