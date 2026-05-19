import React from 'react';

export const iconData = {
  "id": "VentriloThunder",
  "name": "VentriloThunder",
  "category": "LL",
  "nodes": [
    [
      "path",
      {
        "d": "M 14.82 2.88 L 20.44 7.54 L 21.12 14.82 L 16.46 20.44 L 9.18 21.12 L 3.56 16.46 L 2.88 9.18 L 7.54 3.56 Z"
      }
    ]
  ]
};

export const VentriloThunder = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 14.82 2.88 L 20.44 7.54 L 21.12 14.82 L 16.46 20.44 L 9.18 21.12 L 3.56 16.46 L 2.88 9.18 L 7.54 3.56 Z" />
      {children}
    </svg>
  );
});

export default VentriloThunder;
