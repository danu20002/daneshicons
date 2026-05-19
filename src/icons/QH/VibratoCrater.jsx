import React from 'react';

export const iconData = {
  "id": "VibratoCrater",
  "name": "VibratoCrater",
  "category": "QH",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.84 3.42 Q 17.18 3.16 12.15 19.40"
      }
    ],
    [
      "path",
      {
        "d": "M 19.18 14.36 A 5.49 2.49 15 0 1 7.63 16.01"
      }
    ],
    [
      "path",
      {
        "d": "M 12.77 12.48 L 21.27 9.55 L 14.40 16.85"
      }
    ]
  ]
};

export const VibratoCrater = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.84 3.42 Q 17.18 3.16 12.15 19.40" />
      <path d="M 19.18 14.36 A 5.49 2.49 15 0 1 7.63 16.01" />
      <path d="M 12.77 12.48 L 21.27 9.55 L 14.40 16.85" />
      {children}
    </svg>
  );
});

export default VibratoCrater;
