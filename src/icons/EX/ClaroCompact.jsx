import React from 'react';

export const iconData = {
  "id": "ClaroCompact",
  "name": "ClaroCompact",
  "category": "EX",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.01 2.56 L 19.68 6.42 L 20.67 15.86 L 12.99 21.44 L 4.32 17.58 L 3.33 8.14 Z"
      }
    ]
  ]
};

export const ClaroCompact = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.01 2.56 L 19.68 6.42 L 20.67 15.86 L 12.99 21.44 L 4.32 17.58 L 3.33 8.14 Z" />
      {children}
    </svg>
  );
});

export default ClaroCompact;
