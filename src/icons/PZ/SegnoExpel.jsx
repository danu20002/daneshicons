import React from 'react';

export const iconData = {
  "id": "SegnoExpel",
  "name": "SegnoExpel",
  "category": "PZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.59 14.40 L 9.14 10.30 L 9.60 2.59 L 13.70 9.14 L 21.41 9.60 L 14.86 13.70 L 14.40 21.41 L 10.30 14.86 Z"
      }
    ]
  ]
};

export const SegnoExpel = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.59 14.40 L 9.14 10.30 L 9.60 2.59 L 13.70 9.14 L 21.41 9.60 L 14.86 13.70 L 14.40 21.41 L 10.30 14.86 Z" />
      {children}
    </svg>
  );
});

export default SegnoExpel;
