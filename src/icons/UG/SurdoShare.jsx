import React from 'react';

export const iconData = {
  "id": "SurdoShare",
  "name": "SurdoShare",
  "category": "UG",
  "nodes": [
    [
      "path",
      {
        "d": "M 16.90 20.64 L 6.97 20.56 L 2.07 11.92 L 7.10 3.36 L 17.03 3.44 L 21.93 12.08 Z"
      }
    ]
  ]
};

export const SurdoShare = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 16.90 20.64 L 6.97 20.56 L 2.07 11.92 L 7.10 3.36 L 17.03 3.44 L 21.93 12.08 Z" />
      {children}
    </svg>
  );
});

export default SurdoShare;
