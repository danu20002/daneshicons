import React from 'react';

export const iconData = {
  "id": "TritoUncle",
  "name": "TritoUncle",
  "category": "QP",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.45 20.37 L 3.88 14.07 L 7.52 4.91 L 17.36 5.55 L 19.79 15.10 Z"
      }
    ]
  ]
};

export const TritoUncle = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.45 20.37 L 3.88 14.07 L 7.52 4.91 L 17.36 5.55 L 19.79 15.10 Z" />
      {children}
    </svg>
  );
});

export default TritoUncle;
