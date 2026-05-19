import React from 'react';

export const iconData = {
  "id": "VigileTrace",
  "name": "VigileTrace",
  "category": "UW",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.93 5.44 L 20.07 5.44 L 20.07 18.56 L 3.93 18.56 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.93 5.44 L 7.97 1.41 L 24.10 1.41 L 20.07 5.44"
      }
    ],
    [
      "path",
      {
        "d": "M 20.07 5.44 L 24.10 1.41 L 24.10 14.53 L 20.07 18.56"
      }
    ]
  ]
};

export const VigileTrace = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.93 5.44 L 20.07 5.44 L 20.07 18.56 L 3.93 18.56 Z" />
      <path d="M 3.93 5.44 L 7.97 1.41 L 24.10 1.41 L 20.07 5.44" />
      <path d="M 20.07 5.44 L 24.10 1.41 L 24.10 14.53 L 20.07 18.56" />
      {children}
    </svg>
  );
});

export default VigileTrace;
