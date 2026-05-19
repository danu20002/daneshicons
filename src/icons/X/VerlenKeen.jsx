import React from 'react';

export const iconData = {
  "id": "VerlenKeen",
  "name": "VerlenKeen",
  "category": "X",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.15 5.61 L 10.48 7.38 L 15.34 1.61 L 15.93 9.13 L 22.91 11.97 L 15.95 14.85 L 15.40 22.37 L 10.51 16.63 L 3.19 18.44 L 7.13 12.01 Z"
      }
    ]
  ]
};

export const VerlenKeen = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.15 5.61 L 10.48 7.38 L 15.34 1.61 L 15.93 9.13 L 22.91 11.97 L 15.95 14.85 L 15.40 22.37 L 10.51 16.63 L 3.19 18.44 L 7.13 12.01 Z" />
      {children}
    </svg>
  );
});

export default VerlenKeen;
