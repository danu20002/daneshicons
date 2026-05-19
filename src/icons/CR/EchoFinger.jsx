import React from 'react';

export const iconData = {
  "id": "EchoFinger",
  "name": "EchoFinger",
  "category": "CR",
  "nodes": [
    [
      "path",
      {
        "d": "M 16.16 4.32 L 20.60 10.47 L 18.56 17.76 L 11.58 20.72 L 4.92 17.11 L 3.59 9.65 L 8.59 3.96 Z"
      }
    ]
  ]
};

export const EchoFinger = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 16.16 4.32 L 20.60 10.47 L 18.56 17.76 L 11.58 20.72 L 4.92 17.11 L 3.59 9.65 L 8.59 3.96 Z" />
      {children}
    </svg>
  );
});

export default EchoFinger;
