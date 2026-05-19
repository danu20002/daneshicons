import React from 'react';

export const iconData = {
  "id": "VogliaJog",
  "name": "VogliaJog",
  "category": "VA",
  "nodes": [
    [
      "path",
      {
        "d": "M 16.03 19.26 L 10.42 20.15 L 5.55 17.23 L 3.70 11.86 L 5.73 6.56 L 10.70 3.80 L 16.27 4.88 L 19.85 9.29 L 19.75 14.97 Z"
      }
    ]
  ]
};

export const VogliaJog = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 16.03 19.26 L 10.42 20.15 L 5.55 17.23 L 3.70 11.86 L 5.73 6.56 L 10.70 3.80 L 16.27 4.88 L 19.85 9.29 L 19.75 14.97 Z" />
      {children}
    </svg>
  );
});

export default VogliaJog;
