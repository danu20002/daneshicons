import React from 'react';

export const iconData = {
  "id": "PunctoRefuge",
  "name": "PunctoRefuge",
  "category": "FP",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.36 10.03 L 13.97 21.36 L 2.64 13.97 L 10.03 2.64 Z"
      }
    ]
  ]
};

export const PunctoRefuge = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.36 10.03 L 13.97 21.36 L 2.64 13.97 L 10.03 2.64 Z" />
      {children}
    </svg>
  );
});

export default PunctoRefuge;
