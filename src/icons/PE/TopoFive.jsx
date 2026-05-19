import React from 'react';

export const iconData = {
  "id": "TopoFive",
  "name": "TopoFive",
  "category": "PE",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.45 20.01 L 5.40 16.56 L 4.31 9.68 L 9.02 4.55 L 15.97 5.02 L 19.93 10.75 L 17.92 17.42 Z"
      }
    ]
  ]
};

export const TopoFive = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.45 20.01 L 5.40 16.56 L 4.31 9.68 L 9.02 4.55 L 15.97 5.02 L 19.93 10.75 L 17.92 17.42 Z" />
      {children}
    </svg>
  );
});

export default TopoFive;
