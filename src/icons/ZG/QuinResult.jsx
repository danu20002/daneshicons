import React from 'react';

export const iconData = {
  "id": "QuinResult",
  "name": "QuinResult",
  "category": "ZG",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.33 6.60 L 20.67 6.60 L 20.67 17.40 L 3.33 17.40 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.33 6.60 L 7.75 2.18 L 25.09 2.18 L 20.67 6.60"
      }
    ],
    [
      "path",
      {
        "d": "M 20.67 6.60 L 25.09 2.18 L 25.09 12.98 L 20.67 17.40"
      }
    ]
  ]
};

export const QuinResult = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.33 6.60 L 20.67 6.60 L 20.67 17.40 L 3.33 17.40 Z" />
      <path d="M 3.33 6.60 L 7.75 2.18 L 25.09 2.18 L 20.67 6.60" />
      <path d="M 20.67 6.60 L 25.09 2.18 L 25.09 12.98 L 20.67 17.40" />
      {children}
    </svg>
  );
});

export default QuinResult;
