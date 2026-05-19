import React from 'react';

export const iconData = {
  "id": "VidroEraser",
  "name": "VidroEraser",
  "category": "PJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.57 2.90 C 15.05 15.22, 12.43 7.90, 15.36 16.45"
      }
    ],
    [
      "path",
      {
        "d": "M 3.63 6.05 C 12.53 9.17, 6.45 11.84, 19.55 16.68"
      }
    ],
    [
      "path",
      {
        "d": "M 9.76 9.77 C 12.45 16.94, 18.19 7.95, 17.16 16.34"
      }
    ],
    [
      "path",
      {
        "d": "M 3.40 4.54 C 15.63 4.46, 6.38 7.80, 18.16 16.92"
      }
    ],
    [
      "path",
      {
        "d": "M 9.04 5.20 C 19.79 17.76, 5.85 10.35, 20.91 20.49"
      }
    ]
  ]
};

export const VidroEraser = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.57 2.90 C 15.05 15.22, 12.43 7.90, 15.36 16.45" />
      <path d="M 3.63 6.05 C 12.53 9.17, 6.45 11.84, 19.55 16.68" />
      <path d="M 9.76 9.77 C 12.45 16.94, 18.19 7.95, 17.16 16.34" />
      <path d="M 3.40 4.54 C 15.63 4.46, 6.38 7.80, 18.16 16.92" />
      <path d="M 9.04 5.20 C 19.79 17.76, 5.85 10.35, 20.91 20.49" />
      {children}
    </svg>
  );
});

export default VidroEraser;
