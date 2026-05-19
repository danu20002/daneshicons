import React from 'react';

export const iconData = {
  "id": "QuintMajor",
  "name": "QuintMajor",
  "category": "UG",
  "nodes": [
    [
      "path",
      {
        "d": "M 13.85 3.02 L 19.66 6.95 L 20.98 13.85 L 17.05 19.66 L 10.15 20.98 L 4.34 17.05 L 3.02 10.15 L 6.95 4.34 Z"
      }
    ]
  ]
};

export const QuintMajor = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 13.85 3.02 L 19.66 6.95 L 20.98 13.85 L 17.05 19.66 L 10.15 20.98 L 4.34 17.05 L 3.02 10.15 L 6.95 4.34 Z" />
      {children}
    </svg>
  );
});

export default QuintMajor;
