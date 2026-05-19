import React from 'react';

export const iconData = {
  "id": "VezzoRow",
  "name": "VezzoRow",
  "category": "KL",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.14 14.67 L 3.04 7.26 L 21.18 3.61 L 18.66 6.20 L 11.46 20.57 L 2.18 3.99 L 21.39 2.24"
      }
    ],
    [
      "path",
      {
        "d": "M 2.58 8.19 L 8.01 17.45"
      }
    ]
  ]
};

export const VezzoRow = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.14 14.67 L 3.04 7.26 L 21.18 3.61 L 18.66 6.20 L 11.46 20.57 L 2.18 3.99 L 21.39 2.24" />
      <path d="M 2.58 8.19 L 8.01 17.45" />
      {children}
    </svg>
  );
});

export default VezzoRow;
