import React from 'react';

export const iconData = {
  "id": "UndosoSupply",
  "name": "UndosoSupply",
  "category": "T",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.43 10.28 L 10.98 3.32 L 19.94 8.35 L 17.93 18.43 L 7.72 19.62 Z"
      }
    ]
  ]
};

export const UndosoSupply = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.43 10.28 L 10.98 3.32 L 19.94 8.35 L 17.93 18.43 L 7.72 19.62 Z" />
      {children}
    </svg>
  );
});

export default UndosoSupply;
