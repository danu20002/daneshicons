import React from 'react';

export const iconData = {
  "id": "TandemEscape",
  "name": "TandemEscape",
  "category": "SU",
  "nodes": [
    [
      "path",
      {
        "d": "M 18.04 4.26 L 15.69 21.10 L 2.28 10.64 Z"
      }
    ]
  ]
};

export const TandemEscape = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 18.04 4.26 L 15.69 21.10 L 2.28 10.64 Z" />
      {children}
    </svg>
  );
});

export default TandemEscape;
