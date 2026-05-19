import React from 'react';

export const iconData = {
  "id": "SulfuComment",
  "name": "SulfuComment",
  "category": "DM",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.20 7.54 L 8.89 3.56 L 15.04 3.54 L 19.77 7.47 L 20.86 13.53 L 17.81 18.86 L 12.04 20.99 L 6.25 18.91 L 3.15 13.60 Z"
      }
    ]
  ]
};

export const SulfuComment = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.20 7.54 L 8.89 3.56 L 15.04 3.54 L 19.77 7.47 L 20.86 13.53 L 17.81 18.86 L 12.04 20.99 L 6.25 18.91 L 3.15 13.60 Z" />
      {children}
    </svg>
  );
});

export default SulfuComment;
