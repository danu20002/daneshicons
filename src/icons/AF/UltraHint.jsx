import React from 'react';

export const iconData = {
  "id": "UltraHint",
  "name": "UltraHint",
  "category": "AF",
  "nodes": [
    [
      "path",
      {
        "d": "M 17.08 13.40 A 6.45 2.51 136 0 0 3.50 10.02"
      }
    ],
    [
      "path",
      {
        "d": "M 21.86 13.84 Q 2.91 7.77 12.49 9.48"
      }
    ],
    [
      "path",
      {
        "d": "M 15.31 18.33 Q 21.35 14.66 17.53 12.15"
      }
    ],
    [
      "path",
      {
        "d": "M 12.07 21.02 L 17.66 10.26 L 14.73 18.73"
      }
    ],
    [
      "path",
      {
        "d": "M 20.43 5.78 L 13.50 8.93"
      }
    ],
    [
      "path",
      {
        "d": "M 21.61 12.35 L 20.91 10.35 L 11.13 16.30 L 2.65 3.36 L 7.70 9.54 L 14.00 14.69"
      }
    ]
  ]
};

export const UltraHint = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 17.08 13.40 A 6.45 2.51 136 0 0 3.50 10.02" />
      <path d="M 21.86 13.84 Q 2.91 7.77 12.49 9.48" />
      <path d="M 15.31 18.33 Q 21.35 14.66 17.53 12.15" />
      <path d="M 12.07 21.02 L 17.66 10.26 L 14.73 18.73" />
      <path d="M 20.43 5.78 L 13.50 8.93" />
      <path d="M 21.61 12.35 L 20.91 10.35 L 11.13 16.30 L 2.65 3.36 L 7.70 9.54 L 14.00 14.69" />
      {children}
    </svg>
  );
});

export default UltraHint;
