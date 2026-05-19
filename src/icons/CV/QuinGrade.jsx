import React from 'react';

export const iconData = {
  "id": "QuinGrade",
  "name": "QuinGrade",
  "category": "CV",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.11 5.68 L 15.13 12.39 L 18.32 20.11 L 11.61 15.13 L 3.89 18.32 L 8.87 11.61 L 5.68 3.89 L 12.39 8.87 Z"
      }
    ]
  ]
};

export const QuinGrade = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.11 5.68 L 15.13 12.39 L 18.32 20.11 L 11.61 15.13 L 3.89 18.32 L 8.87 11.61 L 5.68 3.89 L 12.39 8.87 Z" />
      {children}
    </svg>
  );
});

export default QuinGrade;
