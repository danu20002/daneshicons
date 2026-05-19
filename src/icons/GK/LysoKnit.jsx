import React from 'react';

export const iconData = {
  "id": "LysoKnit",
  "name": "LysoKnit",
  "category": "GK",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.65 8.30 L 19.53 17.64 L 10.88 21.34 L 3.35 15.70 L 4.47 6.36 L 13.12 2.66 Z"
      }
    ]
  ]
};

export const LysoKnit = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.65 8.30 L 19.53 17.64 L 10.88 21.34 L 3.35 15.70 L 4.47 6.36 L 13.12 2.66 Z" />
      {children}
    </svg>
  );
});

export default LysoKnit;
