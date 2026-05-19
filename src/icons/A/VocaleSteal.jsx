import React from 'react';

export const iconData = {
  "id": "VocaleSteal",
  "name": "VocaleSteal",
  "category": "A",
  "nodes": [
    [
      "path",
      {
        "d": "M 17.92 19.82 L 4.18 17.92 L 6.08 4.18 L 19.82 6.08 Z"
      }
    ]
  ]
};

export const VocaleSteal = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 17.92 19.82 L 4.18 17.92 L 6.08 4.18 L 19.82 6.08 Z" />
      {children}
    </svg>
  );
});

export default VocaleSteal;
