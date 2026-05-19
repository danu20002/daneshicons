import React from 'react';

export const iconData = {
  "id": "QuinGum",
  "name": "QuinGum",
  "category": "BF",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.50 12.79 L 16.07 3.37 L 17.44 19.83 Z"
      }
    ]
  ]
};

export const QuinGum = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.50 12.79 L 16.07 3.37 L 17.44 19.83 Z" />
      {children}
    </svg>
  );
});

export default QuinGum;
