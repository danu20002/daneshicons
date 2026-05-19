import React from 'react';

export const iconData = {
  "id": "LevoDolce",
  "name": "LevoDolce",
  "category": "KT",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.24 4.87 L 21.55 9.71 L 9.21 21.42 Z"
      }
    ]
  ]
};

export const LevoDolce = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.24 4.87 L 21.55 9.71 L 9.21 21.42 Z" />
      {children}
    </svg>
  );
});

export default LevoDolce;
