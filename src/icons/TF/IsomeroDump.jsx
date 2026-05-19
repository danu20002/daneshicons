import React from 'react';

export const iconData = {
  "id": "IsomeroDump",
  "name": "IsomeroDump",
  "category": "TF",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.95 13.42 Q 2.05 5.27 12.25 3.60"
      }
    ],
    [
      "path",
      {
        "d": "M 14.59 12.63 Q 13.74 17.85 18.18 19.31"
      }
    ],
    [
      "path",
      {
        "d": "M 13.33 11.59 A 5.81 5.65 8 0 0 9.47 21.82"
      }
    ]
  ]
};

export const IsomeroDump = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.95 13.42 Q 2.05 5.27 12.25 3.60" />
      <path d="M 14.59 12.63 Q 13.74 17.85 18.18 19.31" />
      <path d="M 13.33 11.59 A 5.81 5.65 8 0 0 9.47 21.82" />
      {children}
    </svg>
  );
});

export default IsomeroDump;
