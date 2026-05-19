import React from 'react';

export const iconData = {
  "id": "TridenteSlot",
  "name": "TridenteSlot",
  "category": "JJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.43 5.86 L 9.52 8.02 L 10.28 1.59 L 13.07 7.43 L 18.14 3.43 L 15.98 9.52 L 22.41 10.28 L 16.57 13.07 L 20.57 18.14 L 14.48 15.98 L 13.72 22.41 L 10.93 16.57 L 5.86 20.57 L 8.02 14.48 L 1.59 13.72 L 7.43 10.93 Z"
      }
    ]
  ]
};

export const TridenteSlot = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.43 5.86 L 9.52 8.02 L 10.28 1.59 L 13.07 7.43 L 18.14 3.43 L 15.98 9.52 L 22.41 10.28 L 16.57 13.07 L 20.57 18.14 L 14.48 15.98 L 13.72 22.41 L 10.93 16.57 L 5.86 20.57 L 8.02 14.48 L 1.59 13.72 L 7.43 10.93 Z" />
      {children}
    </svg>
  );
});

export default TridenteSlot;
