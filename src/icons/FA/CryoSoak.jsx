import React from 'react';

export const iconData = {
  "id": "CryoSoak",
  "name": "CryoSoak",
  "category": "FA",
  "nodes": [
    [
      "path",
      {
        "d": "M 22.58 11.53 L 13.63 14.55 L 7.12 21.40 L 8.97 12.13 L 6.30 3.07 L 13.40 9.31 Z"
      }
    ]
  ]
};

export const CryoSoak = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 22.58 11.53 L 13.63 14.55 L 7.12 21.40 L 8.97 12.13 L 6.30 3.07 L 13.40 9.31 Z" />
      {children}
    </svg>
  );
});

export default CryoSoak;
