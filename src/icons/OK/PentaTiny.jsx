import React from 'react';

export const iconData = {
  "id": "PentaTiny",
  "name": "PentaTiny",
  "category": "OK",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.19 8.75 L 15.25 20.19 L 3.81 15.25 L 8.75 3.81 Z"
      }
    ]
  ]
};

export const PentaTiny = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.19 8.75 L 15.25 20.19 L 3.81 15.25 L 8.75 3.81 Z" />
      {children}
    </svg>
  );
});

export default PentaTiny;
