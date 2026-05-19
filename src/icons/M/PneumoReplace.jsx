import React from 'react';

export const iconData = {
  "id": "PneumoReplace",
  "name": "PneumoReplace",
  "category": "M",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.04 4.80 C 14.19 3.03, 17.00 12.63, 12.50 2.30"
      }
    ],
    [
      "path",
      {
        "d": "M 6.54 9.52 Q 17.33 2.55 14.76 16.71"
      }
    ],
    [
      "path",
      {
        "d": "M 16.62 5.33 L 20.10 18.18 L 11.96 20.50 L 21.14 8.10 L 17.70 8.07 L 6.05 3.87 L 4.46 14.83 L 11.20 7.78"
      }
    ],
    [
      "path",
      {
        "d": "M 3.09 13.85 A 6.01 4.95 45 0 1 20.37 9.74"
      }
    ],
    [
      "path",
      {
        "d": "M 20.05 5.24 Q 2.07 15.29 3.68 19.47"
      }
    ]
  ]
};

export const PneumoReplace = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.04 4.80 C 14.19 3.03, 17.00 12.63, 12.50 2.30" />
      <path d="M 6.54 9.52 Q 17.33 2.55 14.76 16.71" />
      <path d="M 16.62 5.33 L 20.10 18.18 L 11.96 20.50 L 21.14 8.10 L 17.70 8.07 L 6.05 3.87 L 4.46 14.83 L 11.20 7.78" />
      <path d="M 3.09 13.85 A 6.01 4.95 45 0 1 20.37 9.74" />
      <path d="M 20.05 5.24 Q 2.07 15.29 3.68 19.47" />
      {children}
    </svg>
  );
});

export default PneumoReplace;
