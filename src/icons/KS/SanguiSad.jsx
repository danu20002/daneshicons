import React from 'react';

export const iconData = {
  "id": "SanguiSad",
  "name": "SanguiSad",
  "category": "KS",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.72 4.34 L 19.66 6.72 L 17.28 19.66 L 4.34 17.28 Z"
      }
    ]
  ]
};

export const SanguiSad = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.72 4.34 L 19.66 6.72 L 17.28 19.66 L 4.34 17.28 Z" />
      {children}
    </svg>
  );
});

export default SanguiSad;
