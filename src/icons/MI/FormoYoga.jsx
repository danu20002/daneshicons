import React from 'react';

export const iconData = {
  "id": "FormoYoga",
  "name": "FormoYoga",
  "category": "MI",
  "nodes": [
    [
      "path",
      {
        "d": "M 15.82 21.59 L 11.47 15.60 L 5.61 20.10 L 8.62 13.35 L 1.79 10.51 L 9.14 9.74 L 8.18 2.41 L 12.53 8.40 L 18.39 3.90 L 15.38 10.65 L 22.21 13.49 L 14.86 14.26 Z"
      }
    ]
  ]
};

export const FormoYoga = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 15.82 21.59 L 11.47 15.60 L 5.61 20.10 L 8.62 13.35 L 1.79 10.51 L 9.14 9.74 L 8.18 2.41 L 12.53 8.40 L 18.39 3.90 L 15.38 10.65 L 22.21 13.49 L 14.86 14.26 Z" />
      {children}
    </svg>
  );
});

export default FormoYoga;
