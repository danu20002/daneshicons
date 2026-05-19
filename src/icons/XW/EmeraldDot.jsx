import React from 'react';

export const iconData = {
  "id": "EmeraldDot",
  "name": "EmeraldDot",
  "category": "XW",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.30 12.30 L 6.89 3.75 L 16.59 3.45 L 21.70 11.70 L 17.11 20.25 L 7.41 20.55 Z"
      }
    ]
  ]
};

export const EmeraldDot = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.30 12.30 L 6.89 3.75 L 16.59 3.45 L 21.70 11.70 L 17.11 20.25 L 7.41 20.55 Z" />
      {children}
    </svg>
  );
});

export default EmeraldDot;
