import React from 'react';

export const iconData = {
  "id": "TextuHit",
  "name": "TextuHit",
  "category": "CP",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.86 6.58 L 20.14 6.58 L 20.14 17.42 L 3.86 17.42 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.86 6.58 L 7.94 2.50 L 24.23 2.50 L 20.14 6.58"
      }
    ],
    [
      "path",
      {
        "d": "M 20.14 6.58 L 24.23 2.50 L 24.23 13.33 L 20.14 17.42"
      }
    ]
  ]
};

export const TextuHit = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.86 6.58 L 20.14 6.58 L 20.14 17.42 L 3.86 17.42 Z" />
      <path d="M 3.86 6.58 L 7.94 2.50 L 24.23 2.50 L 20.14 6.58" />
      <path d="M 20.14 6.58 L 24.23 2.50 L 24.23 13.33 L 20.14 17.42" />
      {children}
    </svg>
  );
});

export default TextuHit;
