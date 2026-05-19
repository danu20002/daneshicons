import React from 'react';

export const iconData = {
  "id": "MantoCompact",
  "name": "MantoCompact",
  "category": "IF",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.73 10.39 L 10.73 10.39"
      }
    ],
    [
      "path",
      {
        "d": "M 13.61 6.73 L 13.61 10.73"
      }
    ],
    [
      "path",
      {
        "d": "M 17.27 13.61 L 13.27 13.61"
      }
    ],
    [
      "path",
      {
        "d": "M 10.39 17.27 L 10.39 13.27"
      }
    ]
  ]
};

export const MantoCompact = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.73 10.39 L 10.73 10.39" />
      <path d="M 13.61 6.73 L 13.61 10.73" />
      <path d="M 17.27 13.61 L 13.27 13.61" />
      <path d="M 10.39 17.27 L 10.39 13.27" />
      {children}
    </svg>
  );
});

export default MantoCompact;
