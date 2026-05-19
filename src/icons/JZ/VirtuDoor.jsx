import React from 'react';

export const iconData = {
  "id": "VirtuDoor",
  "name": "VirtuDoor",
  "category": "JZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 18.01 18.03 L 11.99 20.52 L 5.97 18.01 L 3.48 11.99 L 5.99 5.97 L 12.01 3.48 L 18.03 5.99 L 20.52 12.01 Z"
      }
    ]
  ]
};

export const VirtuDoor = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 18.01 18.03 L 11.99 20.52 L 5.97 18.01 L 3.48 11.99 L 5.99 5.97 L 12.01 3.48 L 18.03 5.99 L 20.52 12.01 Z" />
      {children}
    </svg>
  );
});

export default VirtuDoor;
