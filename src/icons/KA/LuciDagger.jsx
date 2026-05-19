import React from 'react';

export const iconData = {
  "id": "LuciDagger",
  "name": "LuciDagger",
  "category": "KA",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.41 19.73 L 6.60 5.89 L 19.99 10.38 Z"
      }
    ]
  ]
};

export const LuciDagger = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.41 19.73 L 6.60 5.89 L 19.99 10.38 Z" />
      {children}
    </svg>
  );
});

export default LuciDagger;
