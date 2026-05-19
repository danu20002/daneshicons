import React from 'react';

export const iconData = {
  "id": "AutoRoot",
  "name": "AutoRoot",
  "category": "QO",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.28 12.57 L 8.45 2.93 L 19.53 5.82 L 20.20 17.25 L 9.54 21.42 Z"
      }
    ]
  ]
};

export const AutoRoot = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.28 12.57 L 8.45 2.93 L 19.53 5.82 L 20.20 17.25 L 9.54 21.42 Z" />
      {children}
    </svg>
  );
});

export default AutoRoot;
