import React from 'react';

export const iconData = {
  "id": "NeoPaddle",
  "name": "NeoPaddle",
  "category": "VA",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.97 13.63 L 16.49 18.79 L 10.37 19.97 L 5.21 16.49 L 4.03 10.37 L 7.51 5.21 L 13.63 4.03 L 18.79 7.51 Z"
      }
    ]
  ]
};

export const NeoPaddle = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.97 13.63 L 16.49 18.79 L 10.37 19.97 L 5.21 16.49 L 4.03 10.37 L 7.51 5.21 L 13.63 4.03 L 18.79 7.51 Z" />
      {children}
    </svg>
  );
});

export default NeoPaddle;
