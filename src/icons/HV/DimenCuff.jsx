import React from 'react';

export const iconData = {
  "id": "DimenCuff",
  "name": "DimenCuff",
  "category": "HV",
  "nodes": [
    [
      "path",
      {
        "d": "M 17.52 4.38 L 21.29 10.52 L 19.62 17.52 L 13.48 21.29 L 6.48 19.62 L 2.71 13.48 L 4.38 6.48 L 10.52 2.71 Z"
      }
    ]
  ]
};

export const DimenCuff = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 17.52 4.38 L 21.29 10.52 L 19.62 17.52 L 13.48 21.29 L 6.48 19.62 L 2.71 13.48 L 4.38 6.48 L 10.52 2.71 Z" />
      {children}
    </svg>
  );
});

export default DimenCuff;
