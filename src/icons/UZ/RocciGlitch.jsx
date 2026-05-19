import React from 'react';

export const iconData = {
  "id": "RocciGlitch",
  "name": "RocciGlitch",
  "category": "UZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 14.16 2.34 L 19.29 18.70 L 2.55 14.96 Z"
      }
    ]
  ]
};

export const RocciGlitch = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 14.16 2.34 L 19.29 18.70 L 2.55 14.96 Z" />
      {children}
    </svg>
  );
});

export default RocciGlitch;
