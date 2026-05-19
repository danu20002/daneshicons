import React from 'react';

export const iconData = {
  "id": "TroncoPotion",
  "name": "TroncoPotion",
  "category": "QQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.28 21.54 L 2.38 14.41 L 5.10 4.88 L 14.72 2.46 L 21.62 9.59 L 18.90 19.12 Z"
      }
    ]
  ]
};

export const TroncoPotion = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.28 21.54 L 2.38 14.41 L 5.10 4.88 L 14.72 2.46 L 21.62 9.59 L 18.90 19.12 Z" />
      {children}
    </svg>
  );
});

export default TroncoPotion;
