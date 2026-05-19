import React from 'react';

export const iconData = {
  "id": "MacroRemove",
  "name": "MacroRemove",
  "category": "GB",
  "nodes": [
    [
      "path",
      {
        "d": "M 14.18 8.01 L 14.82 12.46 L 12.88 20.82"
      }
    ],
    [
      "path",
      {
        "d": "M 14.18 2.98 C 6.20 14.95, 12.48 3.53, 6.96 12.72"
      }
    ],
    [
      "path",
      {
        "d": "M 2.55 21.58 Q 14.70 12.18 17.15 16.44"
      }
    ],
    [
      "path",
      {
        "d": "M 20.42 17.18 L 4.86 20.86"
      }
    ],
    [
      "path",
      {
        "d": "M 18.89 13.70 Q 20.09 7.99 13.77 17.86"
      }
    ],
    [
      "path",
      {
        "d": "M 7.78 6.03 Q 17.88 6.31 20.24 12.32"
      }
    ]
  ]
};

export const MacroRemove = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 14.18 8.01 L 14.82 12.46 L 12.88 20.82" />
      <path d="M 14.18 2.98 C 6.20 14.95, 12.48 3.53, 6.96 12.72" />
      <path d="M 2.55 21.58 Q 14.70 12.18 17.15 16.44" />
      <path d="M 20.42 17.18 L 4.86 20.86" />
      <path d="M 18.89 13.70 Q 20.09 7.99 13.77 17.86" />
      <path d="M 7.78 6.03 Q 17.88 6.31 20.24 12.32" />
      {children}
    </svg>
  );
});

export default MacroRemove;
