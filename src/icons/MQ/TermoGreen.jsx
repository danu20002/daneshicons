import React from 'react';

export const iconData = {
  "id": "TermoGreen",
  "name": "TermoGreen",
  "category": "MQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.56 15.55 C 18.47 15.55, 8.70 12.40, 3.77 5.65"
      }
    ],
    [
      "path",
      {
        "d": "M 13.51 21.66 A 3.87 2.90 71 0 0 3.25 6.16"
      }
    ],
    [
      "path",
      {
        "d": "M 3.66 9.59 L 15.07 3.52"
      }
    ],
    [
      "path",
      {
        "d": "M 6.86 6.04 L 2.18 20.87 L 16.18 17.33 L 2.94 14.97 L 5.49 20.67 L 21.72 15.46 L 14.92 9.24"
      }
    ]
  ]
};

export const TermoGreen = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.56 15.55 C 18.47 15.55, 8.70 12.40, 3.77 5.65" />
      <path d="M 13.51 21.66 A 3.87 2.90 71 0 0 3.25 6.16" />
      <path d="M 3.66 9.59 L 15.07 3.52" />
      <path d="M 6.86 6.04 L 2.18 20.87 L 16.18 17.33 L 2.94 14.97 L 5.49 20.67 L 21.72 15.46 L 14.92 9.24" />
      {children}
    </svg>
  );
});

export default TermoGreen;
