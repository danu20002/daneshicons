import React from 'react';

export const iconData = {
  "id": "MultiCompact",
  "name": "MultiCompact",
  "category": "ZZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.14 6.81 L 20.86 6.81 L 20.86 17.19 L 3.14 17.19 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.14 6.81 L 7.44 2.51 L 25.16 2.51 L 20.86 6.81"
      }
    ],
    [
      "path",
      {
        "d": "M 20.86 6.81 L 25.16 2.51 L 25.16 12.89 L 20.86 17.19"
      }
    ]
  ]
};

export const MultiCompact = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.14 6.81 L 20.86 6.81 L 20.86 17.19 L 3.14 17.19 Z" />
      <path d="M 3.14 6.81 L 7.44 2.51 L 25.16 2.51 L 20.86 6.81" />
      <path d="M 20.86 6.81 L 25.16 2.51 L 25.16 12.89 L 20.86 17.19" />
      {children}
    </svg>
  );
});

export default MultiCompact;
