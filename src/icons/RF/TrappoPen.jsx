import React from 'react';

export const iconData = {
  "id": "TrappoPen",
  "name": "TrappoPen",
  "category": "RF",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.39 6.40 L 20.61 6.40 L 20.61 17.60 L 3.39 17.60 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.39 6.40 L 7.45 2.34 L 24.67 2.34 L 20.61 6.40"
      }
    ],
    [
      "path",
      {
        "d": "M 20.61 6.40 L 24.67 2.34 L 24.67 13.54 L 20.61 17.60"
      }
    ]
  ]
};

export const TrappoPen = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.39 6.40 L 20.61 6.40 L 20.61 17.60 L 3.39 17.60 Z" />
      <path d="M 3.39 6.40 L 7.45 2.34 L 24.67 2.34 L 20.61 6.40" />
      <path d="M 20.61 6.40 L 24.67 2.34 L 24.67 13.54 L 20.61 17.60" />
      {children}
    </svg>
  );
});

export default TrappoPen;
