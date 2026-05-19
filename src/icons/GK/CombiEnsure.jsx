import React from 'react';

export const iconData = {
  "id": "CombiEnsure",
  "name": "CombiEnsure",
  "category": "GK",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.32 2.96 L 14.99 2.70 L 20.27 6.80 L 21.67 13.33 L 18.55 19.24 L 12.37 21.76 L 6.01 19.71 L 2.45 14.06 L 3.37 7.44 Z"
      }
    ]
  ]
};

export const CombiEnsure = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.32 2.96 L 14.99 2.70 L 20.27 6.80 L 21.67 13.33 L 18.55 19.24 L 12.37 21.76 L 6.01 19.71 L 2.45 14.06 L 3.37 7.44 Z" />
      {children}
    </svg>
  );
});

export default CombiEnsure;
