import React from 'react';

export const iconData = {
  "id": "VerboPotion",
  "name": "VerboPotion",
  "category": "CR",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.19 19.41 L 2.65 13.13 L 4.59 6.19 L 10.87 2.65 L 17.81 4.59 L 21.35 10.87 L 19.41 17.81 L 13.13 21.35 Z"
      }
    ]
  ]
};

export const VerboPotion = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.19 19.41 L 2.65 13.13 L 4.59 6.19 L 10.87 2.65 L 17.81 4.59 L 21.35 10.87 L 19.41 17.81 L 13.13 21.35 Z" />
      {children}
    </svg>
  );
});

export default VerboPotion;
