import React from 'react';

export const iconData = {
  "id": "TocoTomb",
  "name": "TocoTomb",
  "category": "PD",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.51 21.63 L 3.00 15.46 L 5.93 4.51 L 17.25 3.92 L 21.31 14.49 Z"
      }
    ]
  ]
};

export const TocoTomb = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.51 21.63 L 3.00 15.46 L 5.93 4.51 L 17.25 3.92 L 21.31 14.49 Z" />
      {children}
    </svg>
  );
});

export default TocoTomb;
