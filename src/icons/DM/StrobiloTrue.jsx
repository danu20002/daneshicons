import React from 'react';

export const iconData = {
  "id": "StrobiloTrue",
  "name": "StrobiloTrue",
  "category": "DM",
  "nodes": [
    [
      "path",
      {
        "d": "M 14.81 3.48 L 19.63 7.28 L 20.88 13.29 L 17.97 18.69 L 12.27 20.97 L 6.44 19.04 L 3.22 13.82 L 4.10 7.75 L 8.68 3.67 Z"
      }
    ]
  ]
};

export const StrobiloTrue = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 14.81 3.48 L 19.63 7.28 L 20.88 13.29 L 17.97 18.69 L 12.27 20.97 L 6.44 19.04 L 3.22 13.82 L 4.10 7.75 L 8.68 3.67 Z" />
      {children}
    </svg>
  );
});

export default StrobiloTrue;
