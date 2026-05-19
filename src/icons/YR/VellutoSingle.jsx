import React from 'react';

export const iconData = {
  "id": "VellutoSingle",
  "name": "VellutoSingle",
  "category": "YR",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.55 15.14 L 4.51 8.96 L 8.86 4.55 L 15.04 4.51 L 19.45 8.86 L 19.49 15.04 L 15.14 19.45 L 8.96 19.49 Z"
      }
    ]
  ]
};

export const VellutoSingle = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.55 15.14 L 4.51 8.96 L 8.86 4.55 L 15.04 4.51 L 19.45 8.86 L 19.49 15.04 L 15.14 19.45 L 8.96 19.49 Z" />
      {children}
    </svg>
  );
});

export default VellutoSingle;
