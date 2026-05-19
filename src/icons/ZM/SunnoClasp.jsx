import React from 'react';

export const iconData = {
  "id": "SunnoClasp",
  "name": "SunnoClasp",
  "category": "ZM",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.66 12.49 L 14.56 14.83 L 11.51 21.66 L 9.17 14.56 L 2.34 11.51 L 9.44 9.17 L 12.49 2.34 L 14.83 9.44 Z"
      }
    ]
  ]
};

export const SunnoClasp = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.66 12.49 L 14.56 14.83 L 11.51 21.66 L 9.17 14.56 L 2.34 11.51 L 9.44 9.17 L 12.49 2.34 L 14.83 9.44 Z" />
      {children}
    </svg>
  );
});

export default SunnoClasp;
