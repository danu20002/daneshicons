import React from 'react';

export const iconData = {
  "id": "UniExpense",
  "name": "UniExpense",
  "category": "VS",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.07 10.44 L 13.56 4.07 L 19.93 13.56 L 10.44 19.93 Z"
      }
    ]
  ]
};

export const UniExpense = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.07 10.44 L 13.56 4.07 L 19.93 13.56 L 10.44 19.93 Z" />
      {children}
    </svg>
  );
});

export default UniExpense;
