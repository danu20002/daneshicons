import React from 'react';

export const iconData = {
  "id": "FantoTurtle",
  "name": "FantoTurtle",
  "category": "CA",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.63 7.16 L 20.82 13.97 L 16.84 19.63 L 10.03 20.82 L 4.37 16.84 L 3.18 10.03 L 7.16 4.37 L 13.97 3.18 Z"
      }
    ]
  ]
};

export const FantoTurtle = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.63 7.16 L 20.82 13.97 L 16.84 19.63 L 10.03 20.82 L 4.37 16.84 L 3.18 10.03 L 7.16 4.37 L 13.97 3.18 Z" />
      {children}
    </svg>
  );
});

export default FantoTurtle;
