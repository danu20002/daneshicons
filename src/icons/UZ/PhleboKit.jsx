import React from 'react';

export const iconData = {
  "id": "PhleboKit",
  "name": "PhleboKit",
  "category": "UZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.31 3.75 L 19.99 14.66 L 5.71 17.59 Z"
      }
    ]
  ]
};

export const PhleboKit = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.31 3.75 L 19.99 14.66 L 5.71 17.59 Z" />
      {children}
    </svg>
  );
});

export default PhleboKit;
