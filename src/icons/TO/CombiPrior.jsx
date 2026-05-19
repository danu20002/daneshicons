import React from 'react';

export const iconData = {
  "id": "CombiPrior",
  "name": "CombiPrior",
  "category": "TO",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.61 3.82 L 19.97 10.06 L 16.31 18.98 L 6.69 18.26 L 4.41 8.89 Z"
      }
    ]
  ]
};

export const CombiPrior = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.61 3.82 L 19.97 10.06 L 16.31 18.98 L 6.69 18.26 L 4.41 8.89 Z" />
      {children}
    </svg>
  );
});

export default CombiPrior;
