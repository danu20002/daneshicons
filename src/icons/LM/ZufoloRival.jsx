import React from 'react';

export const iconData = {
  "id": "ZufoloRival",
  "name": "ZufoloRival",
  "category": "LM",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.99 18.90 L 2.87 12.63 L 5.10 5.99 L 11.37 2.87 L 18.01 5.10 L 21.13 11.37 L 18.90 18.01 L 12.63 21.13 Z"
      }
    ]
  ]
};

export const ZufoloRival = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.99 18.90 L 2.87 12.63 L 5.10 5.99 L 11.37 2.87 L 18.01 5.10 L 21.13 11.37 L 18.90 18.01 L 12.63 21.13 Z" />
      {children}
    </svg>
  );
});

export default ZufoloRival;
