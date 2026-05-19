import React from 'react';

export const iconData = {
  "id": "QuasiFridge",
  "name": "QuasiFridge",
  "category": "MY",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.70 17.74 L 3.88 9.42 L 10.18 3.68 L 18.30 6.26 L 20.12 14.58 L 13.82 20.32 Z"
      }
    ]
  ]
};

export const QuasiFridge = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.70 17.74 L 3.88 9.42 L 10.18 3.68 L 18.30 6.26 L 20.12 14.58 L 13.82 20.32 Z" />
      {children}
    </svg>
  );
});

export default QuasiFridge;
