import React from 'react';

export const iconData = {
  "id": "InkaLava",
  "name": "InkaLava",
  "category": "TO",
  "nodes": [
    [
      "path",
      {
        "d": "M 18.43 18.84 L 9.29 20.99 L 2.86 14.15 L 5.57 5.16 L 14.71 3.01 L 21.14 9.85 Z"
      }
    ]
  ]
};

export const InkaLava = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 18.43 18.84 L 9.29 20.99 L 2.86 14.15 L 5.57 5.16 L 14.71 3.01 L 21.14 9.85 Z" />
      {children}
    </svg>
  );
});

export default InkaLava;
