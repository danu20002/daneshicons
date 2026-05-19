import React from 'react';

export const iconData = {
  "id": "StagnoSpread",
  "name": "StagnoSpread",
  "category": "UW",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.56 5.84 L 19.44 5.84 L 19.44 18.16 L 4.56 18.16 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.56 5.84 L 9.40 1.00 L 24.29 1.00 L 19.44 5.84"
      }
    ],
    [
      "path",
      {
        "d": "M 19.44 5.84 L 24.29 1.00 L 24.29 13.32 L 19.44 18.16"
      }
    ]
  ]
};

export const StagnoSpread = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.56 5.84 L 19.44 5.84 L 19.44 18.16 L 4.56 18.16 Z" />
      <path d="M 4.56 5.84 L 9.40 1.00 L 24.29 1.00 L 19.44 5.84" />
      <path d="M 19.44 5.84 L 24.29 1.00 L 24.29 13.32 L 19.44 18.16" />
      {children}
    </svg>
  );
});

export default StagnoSpread;
