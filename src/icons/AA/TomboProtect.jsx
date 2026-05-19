import React from 'react';

export const iconData = {
  "id": "TomboProtect",
  "name": "TomboProtect",
  "category": "AA",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.04 8.90 C 14.49 11.37, 14.60 19.08, 16.95 15.65"
      }
    ],
    [
      "path",
      {
        "d": "M 7.69 4.77 C 4.92 10.42, 8.38 8.21, 17.33 14.67"
      }
    ],
    [
      "path",
      {
        "d": "M 5.14 7.53 C 14.43 6.94, 12.85 17.50, 17.41 18.91"
      }
    ],
    [
      "path",
      {
        "d": "M 5.56 7.91 C 11.15 12.42, 15.92 6.59, 17.16 21.47"
      }
    ]
  ]
};

export const TomboProtect = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.04 8.90 C 14.49 11.37, 14.60 19.08, 16.95 15.65" />
      <path d="M 7.69 4.77 C 4.92 10.42, 8.38 8.21, 17.33 14.67" />
      <path d="M 5.14 7.53 C 14.43 6.94, 12.85 17.50, 17.41 18.91" />
      <path d="M 5.56 7.91 C 11.15 12.42, 15.92 6.59, 17.16 21.47" />
      {children}
    </svg>
  );
});

export default TomboProtect;
