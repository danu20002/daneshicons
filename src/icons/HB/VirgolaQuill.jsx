import React from 'react';

export const iconData = {
  "id": "VirgolaQuill",
  "name": "VirgolaQuill",
  "category": "HB",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.31 18.37 L 4.18 8.56 L 12.86 3.50 L 20.35 10.19 L 16.30 19.38 Z"
      }
    ]
  ]
};

export const VirgolaQuill = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.31 18.37 L 4.18 8.56 L 12.86 3.50 L 20.35 10.19 L 16.30 19.38 Z" />
      {children}
    </svg>
  );
});

export default VirgolaQuill;
