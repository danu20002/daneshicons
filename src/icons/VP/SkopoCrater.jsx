import React from 'react';

export const iconData = {
  "id": "SkopoCrater",
  "name": "SkopoCrater",
  "category": "VP",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.09 6.18 L 20.91 6.18 L 20.91 17.82 L 3.09 17.82 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.09 6.18 L 7.82 1.45 L 25.63 1.45 L 20.91 6.18"
      }
    ],
    [
      "path",
      {
        "d": "M 20.91 6.18 L 25.63 1.45 L 25.63 13.10 L 20.91 17.82"
      }
    ]
  ]
};

export const SkopoCrater = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.09 6.18 L 20.91 6.18 L 20.91 17.82 L 3.09 17.82 Z" />
      <path d="M 3.09 6.18 L 7.82 1.45 L 25.63 1.45 L 20.91 6.18" />
      <path d="M 20.91 6.18 L 25.63 1.45 L 25.63 13.10 L 20.91 17.82" />
      {children}
    </svg>
  );
});

export default SkopoCrater;
