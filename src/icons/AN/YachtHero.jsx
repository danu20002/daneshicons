import React from 'react';

export const iconData = {
  "id": "YachtHero",
  "name": "YachtHero",
  "category": "AN",
  "nodes": [
    [
      "path",
      {
        "d": "M 15.78 2.79 L 18.09 19.88 L 2.13 13.33 Z"
      }
    ]
  ]
};

export const YachtHero = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 15.78 2.79 L 18.09 19.88 L 2.13 13.33 Z" />
      {children}
    </svg>
  );
});

export default YachtHero;
