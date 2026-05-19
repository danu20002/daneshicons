import React from 'react';

export const iconData = {
  "id": "EchoGod",
  "name": "EchoGod",
  "category": "JH",
  "nodes": [
    [
      "path",
      {
        "d": "M 15.50 20.95 L 4.57 18.10 L 3.91 6.82 L 14.43 2.70 L 21.60 11.44 Z"
      }
    ]
  ]
};

export const EchoGod = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 15.50 20.95 L 4.57 18.10 L 3.91 6.82 L 14.43 2.70 L 21.60 11.44 Z" />
      {children}
    </svg>
  );
});

export default EchoGod;
