import React from 'react';

export const iconData = {
  "id": "SorboVillain",
  "name": "SorboVillain",
  "category": "AM",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.47 12.99 L 4.56 5.97 L 11.01 2.47 L 18.03 4.56 L 21.53 11.01 L 19.44 18.03 L 12.99 21.53 L 5.97 19.44 Z"
      }
    ]
  ]
};

export const SorboVillain = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.47 12.99 L 4.56 5.97 L 11.01 2.47 L 18.03 4.56 L 21.53 11.01 L 19.44 18.03 L 12.99 21.53 L 5.97 19.44 Z" />
      {children}
    </svg>
  );
});

export default SorboVillain;
