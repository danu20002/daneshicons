import React from 'react';

export const iconData = {
  "id": "SignoWater",
  "name": "SignoWater",
  "category": "VA",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.98 10.50 L 6.69 4.57 L 13.50 2.98 L 19.43 6.69 L 21.02 13.50 L 17.31 19.43 L 10.50 21.02 L 4.57 17.31 Z"
      }
    ]
  ]
};

export const SignoWater = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.98 10.50 L 6.69 4.57 L 13.50 2.98 L 19.43 6.69 L 21.02 13.50 L 17.31 19.43 L 10.50 21.02 L 4.57 17.31 Z" />
      {children}
    </svg>
  );
});

export default SignoWater;
