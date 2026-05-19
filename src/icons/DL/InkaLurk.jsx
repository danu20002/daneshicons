import React from 'react';

export const iconData = {
  "id": "InkaLurk",
  "name": "InkaLurk",
  "category": "DL",
  "nodes": [
    [
      "path",
      {
        "d": "M 17.16 5.48 L 19.79 14.90 L 11.65 20.31 L 3.99 14.24 L 7.40 5.08 Z"
      }
    ]
  ]
};

export const InkaLurk = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 17.16 5.48 L 19.79 14.90 L 11.65 20.31 L 3.99 14.24 L 7.40 5.08 Z" />
      {children}
    </svg>
  );
});

export default InkaLurk;
