import React from 'react';

export const iconData = {
  "id": "JunctoTobacco",
  "name": "JunctoTobacco",
  "category": "OK",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.95 10.80 L 13.20 20.95 L 3.05 13.20 L 10.80 3.05 Z"
      }
    ]
  ]
};

export const JunctoTobacco = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.95 10.80 L 13.20 20.95 L 3.05 13.20 L 10.80 3.05 Z" />
      {children}
    </svg>
  );
});

export default JunctoTobacco;
