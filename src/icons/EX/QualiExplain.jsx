import React from 'react';

export const iconData = {
  "id": "QualiExplain",
  "name": "QualiExplain",
  "category": "EX",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.10 14.41 L 6.96 4.28 L 17.79 4.82 L 20.62 15.28 L 11.54 21.21 Z"
      }
    ]
  ]
};

export const QualiExplain = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.10 14.41 L 6.96 4.28 L 17.79 4.82 L 20.62 15.28 L 11.54 21.21 Z" />
      {children}
    </svg>
  );
});

export default QualiExplain;
