import React from 'react';

export const iconData = {
  "id": "ThoroCure",
  "name": "ThoroCure",
  "category": "SC",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.98 3.03 L 15.50 2.82 L 20.97 7.98 L 21.18 15.50 L 16.02 20.97 L 8.50 21.18 L 3.03 16.02 L 2.82 8.50 Z"
      }
    ]
  ]
};

export const ThoroCure = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.98 3.03 L 15.50 2.82 L 20.97 7.98 L 21.18 15.50 L 16.02 20.97 L 8.50 21.18 L 3.03 16.02 L 2.82 8.50 Z" />
      {children}
    </svg>
  );
});

export default ThoroCure;
