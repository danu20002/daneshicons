import React from 'react';

export const iconData = {
  "id": "LysoInsulin",
  "name": "LysoInsulin",
  "category": "QQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.56 11.72 L 18.18 19.30 L 10.14 21.38 L 3.51 16.40 L 3.26 8.10 L 9.60 2.74 L 17.74 4.35 Z"
      }
    ]
  ]
};

export const LysoInsulin = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.56 11.72 L 18.18 19.30 L 10.14 21.38 L 3.51 16.40 L 3.26 8.10 L 9.60 2.74 L 17.74 4.35 Z" />
      {children}
    </svg>
  );
});

export default LysoInsulin;
