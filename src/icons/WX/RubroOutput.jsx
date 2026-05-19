import React from 'react';

export const iconData = {
  "id": "RubroOutput",
  "name": "RubroOutput",
  "category": "WX",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.18 10.39 15.71 4.43 Q 15.91 6.33 16.10 8.23 Q 18.23 14.33 20.36 20.44 Q 12.50 18.40 4.64 16.36 Z"
      }
    ]
  ]
};

export const RubroOutput = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.18 10.39 15.71 4.43 Q 15.91 6.33 16.10 8.23 Q 18.23 14.33 20.36 20.44 Q 12.50 18.40 4.64 16.36 Z" />
      {children}
    </svg>
  );
});

export default RubroOutput;
