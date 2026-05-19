import React from 'react';

export const iconData = {
  "id": "UsurpoOnyx",
  "name": "UsurpoOnyx",
  "category": "LD",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.98 8.90 L 11.98 8.90"
      }
    ],
    [
      "path",
      {
        "d": "M 13.70 7.22 L 14.94 11.02"
      }
    ],
    [
      "path",
      {
        "d": "M 17.07 12.14 L 13.84 14.49"
      }
    ],
    [
      "path",
      {
        "d": "M 13.44 16.87 L 10.20 14.52"
      }
    ],
    [
      "path",
      {
        "d": "M 7.81 14.87 L 9.05 11.07"
      }
    ]
  ]
};

export const UsurpoOnyx = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.98 8.90 L 11.98 8.90" />
      <path d="M 13.70 7.22 L 14.94 11.02" />
      <path d="M 17.07 12.14 L 13.84 14.49" />
      <path d="M 13.44 16.87 L 10.20 14.52" />
      <path d="M 7.81 14.87 L 9.05 11.07" />
      {children}
    </svg>
  );
});

export default UsurpoOnyx;
