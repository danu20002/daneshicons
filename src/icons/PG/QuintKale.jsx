import React from 'react';

export const iconData = {
  "id": "QuintKale",
  "name": "QuintKale",
  "category": "PG",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.00 8.26 L 10.26 7.78 L 15.74 3.00 L 16.22 10.26 L 21.00 15.74 L 13.74 16.22 L 8.26 21.00 L 7.78 13.74 Z"
      }
    ]
  ]
};

export const QuintKale = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.00 8.26 L 10.26 7.78 L 15.74 3.00 L 16.22 10.26 L 21.00 15.74 L 13.74 16.22 L 8.26 21.00 L 7.78 13.74 Z" />
      {children}
    </svg>
  );
});

export default QuintKale;
