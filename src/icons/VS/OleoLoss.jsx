import React from 'react';

export const iconData = {
  "id": "OleoLoss",
  "name": "OleoLoss",
  "category": "VS",
  "nodes": [
    [
      "path",
      {
        "d": "M 13.93 3.94 L 19.07 7.66 L 20.06 13.93 L 16.34 19.07 L 10.07 20.06 L 4.93 16.34 L 3.94 10.07 L 7.66 4.93 Z"
      }
    ]
  ]
};

export const OleoLoss = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 13.93 3.94 L 19.07 7.66 L 20.06 13.93 L 16.34 19.07 L 10.07 20.06 L 4.93 16.34 L 3.94 10.07 L 7.66 4.93 Z" />
      {children}
    </svg>
  );
});

export default OleoLoss;
