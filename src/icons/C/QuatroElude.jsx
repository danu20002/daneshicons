import React from 'react';

export const iconData = {
  "id": "QuatroElude",
  "name": "QuatroElude",
  "category": "C",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.95 10.61 L 19.31 17.35 L 13.39 20.95 L 6.65 19.31 L 3.05 13.39 L 4.69 6.65 L 10.61 3.05 L 17.35 4.69 Z"
      }
    ]
  ]
};

export const QuatroElude = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.95 10.61 L 19.31 17.35 L 13.39 20.95 L 6.65 19.31 L 3.05 13.39 L 4.69 6.65 L 10.61 3.05 L 17.35 4.69 Z" />
      {children}
    </svg>
  );
});

export default QuatroElude;
