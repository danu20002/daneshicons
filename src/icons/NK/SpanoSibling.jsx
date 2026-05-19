import React from 'react';

export const iconData = {
  "id": "SpanoSibling",
  "name": "SpanoSibling",
  "category": "NK",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.63 13.11 7.13 7.78 Q 13.63 9.37 20.13 10.96 Q 19.39 13.78 18.66 16.60 Q 14.39 17.52 10.13 18.44 Z"
      }
    ]
  ]
};

export const SpanoSibling = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.63 13.11 7.13 7.78 Q 13.63 9.37 20.13 10.96 Q 19.39 13.78 18.66 16.60 Q 14.39 17.52 10.13 18.44 Z" />
      {children}
    </svg>
  );
});

export default SpanoSibling;
