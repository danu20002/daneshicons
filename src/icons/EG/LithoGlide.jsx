import React from 'react';

export const iconData = {
  "id": "LithoGlide",
  "name": "LithoGlide",
  "category": "EG",
  "nodes": [
    [
      "path",
      {
        "d": "M 17.47 19.30 L 12.06 16.12 L 6.75 19.46 L 8.10 13.33 L 3.29 9.31 L 9.53 8.70 L 11.87 2.88 L 14.37 8.63 L 20.63 9.06 L 15.94 13.22 Z"
      }
    ]
  ]
};

export const LithoGlide = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 17.47 19.30 L 12.06 16.12 L 6.75 19.46 L 8.10 13.33 L 3.29 9.31 L 9.53 8.70 L 11.87 2.88 L 14.37 8.63 L 20.63 9.06 L 15.94 13.22 Z" />
      {children}
    </svg>
  );
});

export default LithoGlide;
