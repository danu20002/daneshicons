import React from 'react';

export const iconData = {
  "id": "VulpinSomber",
  "name": "VulpinSomber",
  "category": "XB",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.62 6.31 L 19.38 6.31 L 19.38 17.69 L 4.62 17.69 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.62 6.31 L 9.04 1.89 L 23.79 1.89 L 19.38 6.31"
      }
    ],
    [
      "path",
      {
        "d": "M 19.38 6.31 L 23.79 1.89 L 23.79 13.28 L 19.38 17.69"
      }
    ]
  ]
};

export const VulpinSomber = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.62 6.31 L 19.38 6.31 L 19.38 17.69 L 4.62 17.69 Z" />
      <path d="M 4.62 6.31 L 9.04 1.89 L 23.79 1.89 L 19.38 6.31" />
      <path d="M 19.38 6.31 L 23.79 1.89 L 23.79 13.28 L 19.38 17.69" />
      {children}
    </svg>
  );
});

export default VulpinSomber;
