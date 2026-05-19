import React from 'react';

export const iconData = {
  "id": "UrsinoSession",
  "name": "UrsinoSession",
  "category": "ZI",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.94 2.09 L 21.05 7.86 L 20.11 17.77 L 11.06 21.91 L 2.95 16.14 L 3.89 6.23 Z"
      }
    ]
  ]
};

export const UrsinoSession = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.94 2.09 L 21.05 7.86 L 20.11 17.77 L 11.06 21.91 L 2.95 16.14 L 3.89 6.23 Z" />
      {children}
    </svg>
  );
});

export default UrsinoSession;
