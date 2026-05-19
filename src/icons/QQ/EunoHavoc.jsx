import React from 'react';

export const iconData = {
  "id": "EunoHavoc",
  "name": "EunoHavoc",
  "category": "QQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.07 4.06 L 18.65 6.75 L 19.04 16.70 L 9.70 20.15 L 3.54 12.34 Z"
      }
    ]
  ]
};

export const EunoHavoc = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.07 4.06 L 18.65 6.75 L 19.04 16.70 L 9.70 20.15 L 3.54 12.34 Z" />
      {children}
    </svg>
  );
});

export default EunoHavoc;
