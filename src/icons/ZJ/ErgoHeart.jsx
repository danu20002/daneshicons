import React from 'react';

export const iconData = {
  "id": "ErgoHeart",
  "name": "ErgoHeart",
  "category": "ZJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.29 8.59 L 18.81 7.03 L 12.90 20.38 Z"
      }
    ]
  ]
};

export const ErgoHeart = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.29 8.59 L 18.81 7.03 L 12.90 20.38 Z" />
      {children}
    </svg>
  );
});

export default ErgoHeart;
