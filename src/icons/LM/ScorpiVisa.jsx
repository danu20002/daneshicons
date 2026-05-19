import React from 'react';

export const iconData = {
  "id": "ScorpiVisa",
  "name": "ScorpiVisa",
  "category": "LM",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.00 20.50 L 3.64 14.52 L 5.64 6.02 L 14.00 3.50 L 20.36 9.48 L 18.36 17.98 Z"
      }
    ]
  ]
};

export const ScorpiVisa = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.00 20.50 L 3.64 14.52 L 5.64 6.02 L 14.00 3.50 L 20.36 9.48 L 18.36 17.98 Z" />
      {children}
    </svg>
  );
});

export default ScorpiVisa;
