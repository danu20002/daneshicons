import React from 'react';

export const iconData = {
  "id": "VelenoFantasy",
  "name": "VelenoFantasy",
  "category": "V",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.75 19.94 L 5.51 16.73 L 4.06 10.75 L 7.27 5.51 L 13.25 4.06 L 18.49 7.27 L 19.94 13.25 L 16.73 18.49 Z"
      }
    ]
  ]
};

export const VelenoFantasy = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.75 19.94 L 5.51 16.73 L 4.06 10.75 L 7.27 5.51 L 13.25 4.06 L 18.49 7.27 L 19.94 13.25 L 16.73 18.49 Z" />
      {children}
    </svg>
  );
});

export default VelenoFantasy;
