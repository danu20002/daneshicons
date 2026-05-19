import React from 'react';

export const iconData = {
  "id": "PseudoFridge",
  "name": "PseudoFridge",
  "category": "XP",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.01 19.85 Q 17.30 17.03 12.01 8.27"
      }
    ],
    [
      "path",
      {
        "d": "M 3.77 11.56 Q 18.93 13.28 14.32 13.11"
      }
    ],
    [
      "path",
      {
        "d": "M 10.92 4.33 L 6.77 11.98 L 17.63 4.42 L 10.45 9.42 L 8.05 14.33 L 10.69 14.92 L 7.67 10.70 L 19.24 2.03"
      }
    ]
  ]
};

export const PseudoFridge = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.01 19.85 Q 17.30 17.03 12.01 8.27" />
      <path d="M 3.77 11.56 Q 18.93 13.28 14.32 13.11" />
      <path d="M 10.92 4.33 L 6.77 11.98 L 17.63 4.42 L 10.45 9.42 L 8.05 14.33 L 10.69 14.92 L 7.67 10.70 L 19.24 2.03" />
      {children}
    </svg>
  );
});

export default PseudoFridge;
