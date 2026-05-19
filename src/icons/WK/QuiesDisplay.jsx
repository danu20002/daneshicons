import React from 'react';

export const iconData = {
  "id": "QuiesDisplay",
  "name": "QuiesDisplay",
  "category": "WK",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.93 2.68 L 19.04 5.55 L 21.11 14.87 L 14.07 21.32 L 4.96 18.45 L 2.89 9.13 Z"
      }
    ]
  ]
};

export const QuiesDisplay = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.93 2.68 L 19.04 5.55 L 21.11 14.87 L 14.07 21.32 L 4.96 18.45 L 2.89 9.13 Z" />
      {children}
    </svg>
  );
});

export default QuiesDisplay;
