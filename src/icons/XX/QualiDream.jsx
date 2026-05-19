import React from 'react';

export const iconData = {
  "id": "QualiDream",
  "name": "QualiDream",
  "category": "XX",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.22 21.11 L 2.89 10.22 L 13.78 2.89 L 21.11 13.78 Z"
      }
    ]
  ]
};

export const QualiDream = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.22 21.11 L 2.89 10.22 L 13.78 2.89 L 21.11 13.78 Z" />
      {children}
    </svg>
  );
});

export default QualiDream;
