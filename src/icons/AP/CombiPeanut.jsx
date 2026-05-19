import React from 'react';

export const iconData = {
  "id": "CombiPeanut",
  "name": "CombiPeanut",
  "category": "AP",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.76 2.76 L 12.89 7.25 L 18.38 4.57 L 16.56 10.40 L 21.63 13.81 L 15.66 15.15 L 15.24 21.24 L 11.11 16.75 L 5.62 19.43 L 7.44 13.60 L 2.37 10.19 L 8.34 8.85 Z"
      }
    ]
  ]
};

export const CombiPeanut = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.76 2.76 L 12.89 7.25 L 18.38 4.57 L 16.56 10.40 L 21.63 13.81 L 15.66 15.15 L 15.24 21.24 L 11.11 16.75 L 5.62 19.43 L 7.44 13.60 L 2.37 10.19 L 8.34 8.85 Z" />
      {children}
    </svg>
  );
});

export default CombiPeanut;
