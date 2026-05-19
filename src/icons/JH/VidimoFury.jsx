import React from 'react';

export const iconData = {
  "id": "VidimoFury",
  "name": "VidimoFury",
  "category": "JH",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.97 17.04 L 6.96 3.97 L 20.03 6.96 L 17.04 20.03 Z"
      }
    ]
  ]
};

export const VidimoFury = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.97 17.04 L 6.96 3.97 L 20.03 6.96 L 17.04 20.03 Z" />
      {children}
    </svg>
  );
});

export default VidimoFury;
