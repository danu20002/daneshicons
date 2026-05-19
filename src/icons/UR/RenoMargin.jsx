import React from 'react';

export const iconData = {
  "id": "RenoMargin",
  "name": "RenoMargin",
  "category": "UR",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.15 6.88 L 5.36 5.78 L 19.24 13.32"
      }
    ],
    [
      "path",
      {
        "d": "M 20.61 20.88 Q 3.71 21.06 13.42 3.58"
      }
    ]
  ]
};

export const RenoMargin = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.15 6.88 L 5.36 5.78 L 19.24 13.32" />
      <path d="M 20.61 20.88 Q 3.71 21.06 13.42 3.58" />
      {children}
    </svg>
  );
});

export default RenoMargin;
