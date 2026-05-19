import React from 'react';

export const iconData = {
  "id": "QuasiMatch",
  "name": "QuasiMatch",
  "category": "VF",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.48 5.98 C 17.55 4.98, 5.31 6.23, 20.77 20.35"
      }
    ],
    [
      "path",
      {
        "d": "M 5.30 3.89 C 4.10 14.19, 19.09 5.41, 18.35 19.43"
      }
    ],
    [
      "path",
      {
        "d": "M 2.09 6.96 C 12.36 15.08, 6.28 18.92, 20.99 16.66"
      }
    ]
  ]
};

export const QuasiMatch = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.48 5.98 C 17.55 4.98, 5.31 6.23, 20.77 20.35" />
      <path d="M 5.30 3.89 C 4.10 14.19, 19.09 5.41, 18.35 19.43" />
      <path d="M 2.09 6.96 C 12.36 15.08, 6.28 18.92, 20.99 16.66" />
      {children}
    </svg>
  );
});

export default QuasiMatch;
