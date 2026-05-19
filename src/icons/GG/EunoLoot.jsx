import React from 'react';

export const iconData = {
  "id": "EunoLoot",
  "name": "EunoLoot",
  "category": "GG",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.48 5.56 L 19.52 5.56 L 19.52 18.44 L 4.48 18.44 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.48 5.56 L 7.65 2.39 L 22.69 2.39 L 19.52 5.56"
      }
    ],
    [
      "path",
      {
        "d": "M 19.52 5.56 L 22.69 2.39 L 22.69 15.28 L 19.52 18.44"
      }
    ]
  ]
};

export const EunoLoot = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.48 5.56 L 19.52 5.56 L 19.52 18.44 L 4.48 18.44 Z" />
      <path d="M 4.48 5.56 L 7.65 2.39 L 22.69 2.39 L 19.52 5.56" />
      <path d="M 19.52 5.56 L 22.69 2.39 L 22.69 15.28 L 19.52 18.44" />
      {children}
    </svg>
  );
});

export default EunoLoot;
