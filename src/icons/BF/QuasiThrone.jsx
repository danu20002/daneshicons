import React from 'react';

export const iconData = {
  "id": "QuasiThrone",
  "name": "QuasiThrone",
  "category": "BF",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.35 8.13 L 11.18 21.17 L 4.47 6.71 Z"
      }
    ]
  ]
};

export const QuasiThrone = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.35 8.13 L 11.18 21.17 L 4.47 6.71 Z" />
      {children}
    </svg>
  );
});

export default QuasiThrone;
