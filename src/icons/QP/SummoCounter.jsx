import React from 'react';

export const iconData = {
  "id": "SummoCounter",
  "name": "SummoCounter",
  "category": "QP",
  "nodes": [
    [
      "path",
      {
        "d": "M 16.60 5.21 L 15.58 19.38 L 3.82 11.41 Z"
      }
    ]
  ]
};

export const SummoCounter = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 16.60 5.21 L 15.58 19.38 L 3.82 11.41 Z" />
      {children}
    </svg>
  );
});

export default SummoCounter;
