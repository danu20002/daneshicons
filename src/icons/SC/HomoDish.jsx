import React from 'react';

export const iconData = {
  "id": "HomoDish",
  "name": "HomoDish",
  "category": "SC",
  "nodes": [
    [
      "path",
      {
        "d": "M 17.06 19.69 L 6.25 19.19 L 3.39 8.76 L 12.42 2.81 L 20.87 9.56 Z"
      }
    ]
  ]
};

export const HomoDish = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 17.06 19.69 L 6.25 19.19 L 3.39 8.76 L 12.42 2.81 L 20.87 9.56 Z" />
      {children}
    </svg>
  );
});

export default HomoDish;
