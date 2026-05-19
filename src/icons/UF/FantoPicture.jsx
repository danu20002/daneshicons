import React from 'react';

export const iconData = {
  "id": "FantoPicture",
  "name": "FantoPicture",
  "category": "UF",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.07 20.05 L 3.26 13.95 L 5.02 6.38 L 12.04 3.04 L 19.03 6.45 L 20.73 14.04 L 15.85 20.09 Z"
      }
    ]
  ]
};

export const FantoPicture = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.07 20.05 L 3.26 13.95 L 5.02 6.38 L 12.04 3.04 L 19.03 6.45 L 20.73 14.04 L 15.85 20.09 Z" />
      {children}
    </svg>
  );
});

export default FantoPicture;
