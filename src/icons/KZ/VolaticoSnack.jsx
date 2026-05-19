import React from 'react';

export const iconData = {
  "id": "VolaticoSnack",
  "name": "VolaticoSnack",
  "category": "KZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.42 6.29 C 10.85 17.02, 5.37 8.32, 15.72 14.18"
      }
    ],
    [
      "path",
      {
        "d": "M 8.57 5.52 C 4.64 14.07, 13.72 19.81, 17.28 17.37"
      }
    ],
    [
      "path",
      {
        "d": "M 4.06 9.03 C 11.18 17.85, 10.92 13.70, 19.22 19.98"
      }
    ]
  ]
};

export const VolaticoSnack = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.42 6.29 C 10.85 17.02, 5.37 8.32, 15.72 14.18" />
      <path d="M 8.57 5.52 C 4.64 14.07, 13.72 19.81, 17.28 17.37" />
      <path d="M 4.06 9.03 C 11.18 17.85, 10.92 13.70, 19.22 19.98" />
      {children}
    </svg>
  );
});

export default VolaticoSnack;
