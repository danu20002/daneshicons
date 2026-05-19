import React from 'react';

export const iconData = {
  "id": "TornadoUnlock",
  "name": "TornadoUnlock",
  "category": "BD",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.91 5.90 L 20.09 5.90 L 20.09 18.10 L 3.91 18.10 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.91 5.90 L 7.22 2.59 L 23.40 2.59 L 20.09 5.90"
      }
    ],
    [
      "path",
      {
        "d": "M 20.09 5.90 L 23.40 2.59 L 23.40 14.79 L 20.09 18.10"
      }
    ]
  ]
};

export const TornadoUnlock = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.91 5.90 L 20.09 5.90 L 20.09 18.10 L 3.91 18.10 Z" />
      <path d="M 3.91 5.90 L 7.22 2.59 L 23.40 2.59 L 20.09 5.90" />
      <path d="M 20.09 5.90 L 23.40 2.59 L 23.40 14.79 L 20.09 18.10" />
      {children}
    </svg>
  );
});

export default TornadoUnlock;
