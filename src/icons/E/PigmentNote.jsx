import React from 'react';

export const iconData = {
  "id": "PigmentNote",
  "name": "PigmentNote",
  "category": "E",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.90 21.45 L 8.41 14.29 L 2.55 9.90 L 9.71 8.41 L 14.10 2.55 L 15.59 9.71 L 21.45 14.10 L 14.29 15.59 Z"
      }
    ]
  ]
};

export const PigmentNote = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.90 21.45 L 8.41 14.29 L 2.55 9.90 L 9.71 8.41 L 14.10 2.55 L 15.59 9.71 L 21.45 14.10 L 14.29 15.59 Z" />
      {children}
    </svg>
  );
});

export default PigmentNote;
