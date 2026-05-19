import React from 'react';

export const iconData = {
  "id": "ArchiNausea",
  "name": "ArchiNausea",
  "category": "LN",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.51 3.35 L 18.48 6.24 L 20.65 12.51 L 17.76 18.48 L 11.49 20.65 L 5.52 17.76 L 3.35 11.49 L 6.24 5.52 Z"
      }
    ]
  ]
};

export const ArchiNausea = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.51 3.35 L 18.48 6.24 L 20.65 12.51 L 17.76 18.48 L 11.49 20.65 L 5.52 17.76 L 3.35 11.49 L 6.24 5.52 Z" />
      {children}
    </svg>
  );
});

export default ArchiNausea;
