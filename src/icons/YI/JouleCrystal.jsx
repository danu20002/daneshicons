import React from 'react';

export const iconData = {
  "id": "JouleCrystal",
  "name": "JouleCrystal",
  "category": "YI",
  "nodes": [
    [
      "path",
      {
        "d": "M 18.29 14.88 A 3.24 5.25 100 0 0 13.08 12.80"
      }
    ],
    [
      "path",
      {
        "d": "M 21.03 14.06 L 3.68 18.47"
      }
    ],
    [
      "path",
      {
        "d": "M 21.17 20.64 Q 20.12 18.81 5.86 19.78"
      }
    ],
    [
      "path",
      {
        "d": "M 13.72 5.66 L 11.27 20.33 L 21.82 19.57 L 7.32 12.19"
      }
    ]
  ]
};

export const JouleCrystal = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 18.29 14.88 A 3.24 5.25 100 0 0 13.08 12.80" />
      <path d="M 21.03 14.06 L 3.68 18.47" />
      <path d="M 21.17 20.64 Q 20.12 18.81 5.86 19.78" />
      <path d="M 13.72 5.66 L 11.27 20.33 L 21.82 19.57 L 7.32 12.19" />
      {children}
    </svg>
  );
});

export default JouleCrystal;
