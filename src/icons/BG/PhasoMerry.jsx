import React from 'react';

export const iconData = {
  "id": "PhasoMerry",
  "name": "PhasoMerry",
  "category": "BG",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.42 7.06 L 19.30 18.49 L 8.09 20.95 L 2.28 11.04 L 9.91 2.46 Z"
      }
    ]
  ]
};

export const PhasoMerry = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.42 7.06 L 19.30 18.49 L 8.09 20.95 L 2.28 11.04 L 9.91 2.46 Z" />
      {children}
    </svg>
  );
});

export default PhasoMerry;
