import React from 'react';

export const iconData = {
  "id": "QuarzoSelf",
  "name": "QuarzoSelf",
  "category": "EY",
  "nodes": [
    [
      "path",
      {
        "d": "M 16.21 18.91 L 8.12 19.10 L 3.91 12.19 L 7.79 5.09 L 15.88 4.90 L 20.09 11.81 Z"
      }
    ]
  ]
};

export const QuarzoSelf = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 16.21 18.91 L 8.12 19.10 L 3.91 12.19 L 7.79 5.09 L 15.88 4.90 L 20.09 11.81 Z" />
      {children}
    </svg>
  );
});

export default QuarzoSelf;
