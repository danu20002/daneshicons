import React from 'react';

export const iconData = {
  "id": "SinterShake",
  "name": "SinterShake",
  "category": "RF",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.62 6.72 L 20.38 6.72 L 20.38 17.28 L 3.62 17.28 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.62 6.72 L 7.90 2.44 L 24.65 2.44 L 20.38 6.72"
      }
    ],
    [
      "path",
      {
        "d": "M 20.38 6.72 L 24.65 2.44 L 24.65 13.01 L 20.38 17.28"
      }
    ]
  ]
};

export const SinterShake = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.62 6.72 L 20.38 6.72 L 20.38 17.28 L 3.62 17.28 Z" />
      <path d="M 3.62 6.72 L 7.90 2.44 L 24.65 2.44 L 20.38 6.72" />
      <path d="M 20.38 6.72 L 24.65 2.44 L 24.65 13.01 L 20.38 17.28" />
      {children}
    </svg>
  );
});

export default SinterShake;
