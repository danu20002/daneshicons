import React from 'react';

export const iconData = {
  "id": "LimoElm",
  "name": "LimoElm",
  "category": "FA",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.57 21.09 L 8.93 13.39 L 2.91 8.57 L 10.61 8.93 L 15.43 2.91 L 15.07 10.61 L 21.09 15.43 L 13.39 15.07 Z"
      }
    ]
  ]
};

export const LimoElm = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.57 21.09 L 8.93 13.39 L 2.91 8.57 L 10.61 8.93 L 15.43 2.91 L 15.07 10.61 L 21.09 15.43 L 13.39 15.07 Z" />
      {children}
    </svg>
  );
});

export default LimoElm;
