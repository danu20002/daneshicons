import React from 'react';

export const iconData = {
  "id": "SegnoBubble",
  "name": "SegnoBubble",
  "category": "ZM",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.58 10.72 L 9.53 8.75 L 13.28 2.58 L 15.25 9.53 L 21.42 13.28 L 14.47 15.25 L 10.72 21.42 L 8.75 14.47 Z"
      }
    ]
  ]
};

export const SegnoBubble = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.58 10.72 L 9.53 8.75 L 13.28 2.58 L 15.25 9.53 L 21.42 13.28 L 14.47 15.25 L 10.72 21.42 L 8.75 14.47 Z" />
      {children}
    </svg>
  );
});

export default SegnoBubble;
