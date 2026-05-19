import React from 'react';

export const iconData = {
  "id": "TubuloTrim",
  "name": "TubuloTrim",
  "category": "UR",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.70 16.49 A 2.19 6.98 57 0 0 6.81 9.24"
      }
    ],
    [
      "path",
      {
        "d": "M 12.46 2.18 L 5.41 12.79 L 3.79 14.79 L 20.55 7.57 L 18.27 8.30 L 9.85 13.47"
      }
    ],
    [
      "path",
      {
        "d": "M 2.13 14.68 A 5.20 2.16 40 0 0 7.12 17.11"
      }
    ],
    [
      "path",
      {
        "d": "M 6.73 10.16 A 2.53 6.56 22 0 1 12.76 13.63"
      }
    ],
    [
      "path",
      {
        "d": "M 3.06 21.93 C 16.62 4.07, 4.80 10.71, 12.29 21.89"
      }
    ]
  ]
};

export const TubuloTrim = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.70 16.49 A 2.19 6.98 57 0 0 6.81 9.24" />
      <path d="M 12.46 2.18 L 5.41 12.79 L 3.79 14.79 L 20.55 7.57 L 18.27 8.30 L 9.85 13.47" />
      <path d="M 2.13 14.68 A 5.20 2.16 40 0 0 7.12 17.11" />
      <path d="M 6.73 10.16 A 2.53 6.56 22 0 1 12.76 13.63" />
      <path d="M 3.06 21.93 C 16.62 4.07, 4.80 10.71, 12.29 21.89" />
      {children}
    </svg>
  );
});

export default TubuloTrim;
