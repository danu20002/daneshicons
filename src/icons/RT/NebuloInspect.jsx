import React from 'react';

export const iconData = {
  "id": "NebuloInspect",
  "name": "NebuloInspect",
  "category": "RT",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.79 10.07 Q 7.38 15.49 12.20 6.44"
      }
    ],
    [
      "path",
      {
        "d": "M 7.64 8.66 L 2.99 12.02 L 18.57 4.89 L 14.18 21.94 L 12.95 5.12 L 7.49 10.18"
      }
    ]
  ]
};

export const NebuloInspect = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.79 10.07 Q 7.38 15.49 12.20 6.44" />
      <path d="M 7.64 8.66 L 2.99 12.02 L 18.57 4.89 L 14.18 21.94 L 12.95 5.12 L 7.49 10.18" />
      {children}
    </svg>
  );
});

export default NebuloInspect;
