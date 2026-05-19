import React from 'react';

export const iconData = {
  "id": "UrsinoMelody",
  "name": "UrsinoMelody",
  "category": "JX",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.66 6.51 L 19.34 6.51 L 19.34 17.49 L 4.66 17.49 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.66 6.51 L 8.03 3.14 L 22.70 3.14 L 19.34 6.51"
      }
    ],
    [
      "path",
      {
        "d": "M 19.34 6.51 L 22.70 3.14 L 22.70 14.12 L 19.34 17.49"
      }
    ]
  ]
};

export const UrsinoMelody = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.66 6.51 L 19.34 6.51 L 19.34 17.49 L 4.66 17.49 Z" />
      <path d="M 4.66 6.51 L 8.03 3.14 L 22.70 3.14 L 19.34 6.51" />
      <path d="M 19.34 6.51 L 22.70 3.14 L 22.70 14.12 L 19.34 17.49" />
      {children}
    </svg>
  );
});

export default UrsinoMelody;
