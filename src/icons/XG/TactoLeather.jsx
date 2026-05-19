import React from 'react';

export const iconData = {
  "id": "TactoLeather",
  "name": "TactoLeather",
  "category": "XG",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.84 7.75 L 8.78 7.70 L 10.23 2.97 L 13.36 6.80 L 17.96 4.99 L 16.91 9.82 L 21.20 12.28 L 16.77 14.48 L 17.51 19.37 L 13.03 17.27 L 9.68 20.90 L 8.52 16.10 L 3.59 15.73 L 6.63 11.83 Z"
      }
    ]
  ]
};

export const TactoLeather = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.84 7.75 L 8.78 7.70 L 10.23 2.97 L 13.36 6.80 L 17.96 4.99 L 16.91 9.82 L 21.20 12.28 L 16.77 14.48 L 17.51 19.37 L 13.03 17.27 L 9.68 20.90 L 8.52 16.10 L 3.59 15.73 L 6.63 11.83 Z" />
      {children}
    </svg>
  );
});

export default TactoLeather;
