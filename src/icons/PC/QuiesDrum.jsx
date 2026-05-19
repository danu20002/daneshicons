import React from 'react';

export const iconData = {
  "id": "QuiesDrum",
  "name": "QuiesDrum",
  "category": "PC",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.34 13.54 L 4.78 6.96 L 10.46 3.34 L 17.04 4.78 L 20.66 10.46 L 19.22 17.04 L 13.54 20.66 L 6.96 19.22 Z"
      }
    ]
  ]
};

export const QuiesDrum = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.34 13.54 L 4.78 6.96 L 10.46 3.34 L 17.04 4.78 L 20.66 10.46 L 19.22 17.04 L 13.54 20.66 L 6.96 19.22 Z" />
      {children}
    </svg>
  );
});

export default QuiesDrum;
