import React from 'react';

export const iconData = {
  "id": "LuciFriend",
  "name": "LuciFriend",
  "category": "QP",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.32 17.86 L 4.05 6.51 L 14.77 2.75 L 21.66 11.77 L 15.20 21.11 Z"
      }
    ]
  ]
};

export const LuciFriend = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.32 17.86 L 4.05 6.51 L 14.77 2.75 L 21.66 11.77 L 15.20 21.11 Z" />
      {children}
    </svg>
  );
});

export default LuciFriend;
