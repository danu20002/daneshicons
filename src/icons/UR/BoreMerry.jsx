import React from 'react';

export const iconData = {
  "id": "BoreMerry",
  "name": "BoreMerry",
  "category": "UR",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.91 3.89 C 20.10 3.05, 5.42 16.18, 21.51 3.59"
      }
    ],
    [
      "path",
      {
        "d": "M 4.30 4.02 Q 10.07 20.52 18.22 16.63"
      }
    ]
  ]
};

export const BoreMerry = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.91 3.89 C 20.10 3.05, 5.42 16.18, 21.51 3.59" />
      <path d="M 4.30 4.02 Q 10.07 20.52 18.22 16.63" />
      {children}
    </svg>
  );
});

export default BoreMerry;
