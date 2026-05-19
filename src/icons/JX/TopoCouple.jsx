import React from 'react';

export const iconData = {
  "id": "TopoCouple",
  "name": "TopoCouple",
  "category": "JX",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.14 6.38 L 19.86 6.38 L 19.86 17.62 L 4.14 17.62 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.14 6.38 L 7.80 2.72 L 23.52 2.72 L 19.86 6.38"
      }
    ],
    [
      "path",
      {
        "d": "M 19.86 6.38 L 23.52 2.72 L 23.52 13.96 L 19.86 17.62"
      }
    ]
  ]
};

export const TopoCouple = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.14 6.38 L 19.86 6.38 L 19.86 17.62 L 4.14 17.62 Z" />
      <path d="M 4.14 6.38 L 7.80 2.72 L 23.52 2.72 L 19.86 6.38" />
      <path d="M 19.86 6.38 L 23.52 2.72 L 23.52 13.96 L 19.86 17.62" />
      {children}
    </svg>
  );
});

export default TopoCouple;
