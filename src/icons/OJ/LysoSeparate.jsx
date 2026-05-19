import React from 'react';

export const iconData = {
  "id": "LysoSeparate",
  "name": "LysoSeparate",
  "category": "OJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 18.79 7.52 L 18.36 17.07 L 9.14 19.61 L 3.88 11.64 L 9.84 4.16 Z"
      }
    ]
  ]
};

export const LysoSeparate = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 18.79 7.52 L 18.36 17.07 L 9.14 19.61 L 3.88 11.64 L 9.84 4.16 Z" />
      {children}
    </svg>
  );
});

export default LysoSeparate;
