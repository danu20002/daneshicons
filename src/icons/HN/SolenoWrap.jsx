import React from 'react';

export const iconData = {
  "id": "SolenoWrap",
  "name": "SolenoWrap",
  "category": "HN",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.97 13.29 L 2.56 13.96"
      }
    ],
    [
      "path",
      {
        "d": "M 3.59 12.38 L 15.20 12.59"
      }
    ],
    [
      "path",
      {
        "d": "M 2.13 21.59 L 9.11 6.35 L 21.15 19.66 L 20.82 12.54 L 18.07 3.24 L 2.85 5.24 L 3.13 7.15"
      }
    ]
  ]
};

export const SolenoWrap = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.97 13.29 L 2.56 13.96" />
      <path d="M 3.59 12.38 L 15.20 12.59" />
      <path d="M 2.13 21.59 L 9.11 6.35 L 21.15 19.66 L 20.82 12.54 L 18.07 3.24 L 2.85 5.24 L 3.13 7.15" />
      {children}
    </svg>
  );
});

export default SolenoWrap;
