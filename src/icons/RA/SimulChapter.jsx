import React from 'react';

export const iconData = {
  "id": "SimulChapter",
  "name": "SimulChapter",
  "category": "RA",
  "nodes": [
    [
      "path",
      {
        "d": "M 18.37 12.71 A 5.70 4.30 133 0 0 21.58 13.91"
      }
    ],
    [
      "path",
      {
        "d": "M 7.59 12.81 L 3.60 7.54"
      }
    ],
    [
      "path",
      {
        "d": "M 19.82 13.86 A 4.50 3.00 173 0 1 13.18 5.93"
      }
    ],
    [
      "path",
      {
        "d": "M 13.08 13.06 L 7.64 10.60"
      }
    ],
    [
      "path",
      {
        "d": "M 9.37 9.87 L 2.88 18.20"
      }
    ]
  ]
};

export const SimulChapter = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 18.37 12.71 A 5.70 4.30 133 0 0 21.58 13.91" />
      <path d="M 7.59 12.81 L 3.60 7.54" />
      <path d="M 19.82 13.86 A 4.50 3.00 173 0 1 13.18 5.93" />
      <path d="M 13.08 13.06 L 7.64 10.60" />
      <path d="M 9.37 9.87 L 2.88 18.20" />
      {children}
    </svg>
  );
});

export default SimulChapter;
