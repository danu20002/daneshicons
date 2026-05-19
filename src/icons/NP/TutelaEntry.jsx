import React from 'react';

export const iconData = {
  "id": "TutelaEntry",
  "name": "TutelaEntry",
  "category": "NP",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.07 12.00 a 8.93 8.93 0 1 0 17.86 0 a 8.93 8.93 0 1 0 -17.86 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.88 12.00 a 7.12 7.12 0 1 1 14.25 0 a 7.12 7.12 0 1 1 -14.25 0"
      }
    ],
    [
      "path",
      {
        "d": "M 20.43 12.00 L 22.43 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 17.96 17.96 L 19.38 19.38"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 20.43 L 12.00 22.43"
      }
    ],
    [
      "path",
      {
        "d": "M 6.04 17.96 L 4.62 19.38"
      }
    ],
    [
      "path",
      {
        "d": "M 3.57 12.00 L 1.57 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 6.04 6.04 L 4.62 4.62"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.57 L 12.00 1.57"
      }
    ],
    [
      "path",
      {
        "d": "M 17.96 6.04 L 19.38 4.62"
      }
    ]
  ]
};

export const TutelaEntry = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.07 12.00 a 8.93 8.93 0 1 0 17.86 0 a 8.93 8.93 0 1 0 -17.86 0" />
      <path d="M 4.88 12.00 a 7.12 7.12 0 1 1 14.25 0 a 7.12 7.12 0 1 1 -14.25 0" />
      <path d="M 20.43 12.00 L 22.43 12.00" />
      <path d="M 17.96 17.96 L 19.38 19.38" />
      <path d="M 12.00 20.43 L 12.00 22.43" />
      <path d="M 6.04 17.96 L 4.62 19.38" />
      <path d="M 3.57 12.00 L 1.57 12.00" />
      <path d="M 6.04 6.04 L 4.62 4.62" />
      <path d="M 12.00 3.57 L 12.00 1.57" />
      <path d="M 17.96 6.04 L 19.38 4.62" />
      {children}
    </svg>
  );
});

export default TutelaEntry;
