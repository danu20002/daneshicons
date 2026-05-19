import React from 'react';

export const iconData = {
  "id": "VeloceExpel",
  "name": "VeloceExpel",
  "category": "TM",
  "nodes": [
    [
      "path",
      {
        "d": "M 18.53 16.97 L 13.10 20.13 L 7.03 18.53 L 3.87 13.10 L 5.47 7.03 L 10.90 3.87 L 16.97 5.47 L 20.13 10.90 Z"
      }
    ]
  ]
};

export const VeloceExpel = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 18.53 16.97 L 13.10 20.13 L 7.03 18.53 L 3.87 13.10 L 5.47 7.03 L 10.90 3.87 L 16.97 5.47 L 20.13 10.90 Z" />
      {children}
    </svg>
  );
});

export default VeloceExpel;
