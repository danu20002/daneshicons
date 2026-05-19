import React from 'react';

export const iconData = {
  "id": "YenSarcasm",
  "name": "YenSarcasm",
  "category": "MC",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.41 5.60 L 20.59 5.60 L 20.59 18.40 L 3.41 18.40 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.41 5.60 L 7.36 1.64 L 24.55 1.64 L 20.59 5.60"
      }
    ],
    [
      "path",
      {
        "d": "M 20.59 5.60 L 24.55 1.64 L 24.55 14.44 L 20.59 18.40"
      }
    ]
  ]
};

export const YenSarcasm = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.41 5.60 L 20.59 5.60 L 20.59 18.40 L 3.41 18.40 Z" />
      <path d="M 3.41 5.60 L 7.36 1.64 L 24.55 1.64 L 20.59 5.60" />
      <path d="M 20.59 5.60 L 24.55 1.64 L 24.55 14.44 L 20.59 18.40" />
      {children}
    </svg>
  );
});

export default YenSarcasm;
