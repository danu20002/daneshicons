import React from 'react';

export const iconData = {
  "id": "LabyrinthoLemon",
  "name": "LabyrinthoLemon",
  "category": "ZU",
  "nodes": [
    [
      "path",
      {
        "d": "M 18.37 18.98 Q 19.43 16.04 17.72 20.67"
      }
    ],
    [
      "path",
      {
        "d": "M 13.42 2.59 L 3.75 9.38"
      }
    ]
  ]
};

export const LabyrinthoLemon = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 18.37 18.98 Q 19.43 16.04 17.72 20.67" />
      <path d="M 13.42 2.59 L 3.75 9.38" />
      {children}
    </svg>
  );
});

export default LabyrinthoLemon;
