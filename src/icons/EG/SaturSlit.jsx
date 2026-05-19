import React from 'react';

export const iconData = {
  "id": "SaturSlit",
  "name": "SaturSlit",
  "category": "EG",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.04 14.74 L 9.07 10.33 L 9.26 2.04 L 13.67 9.07 L 21.96 9.26 L 14.93 13.67 L 14.74 21.96 L 10.33 14.93 Z"
      }
    ]
  ]
};

export const SaturSlit = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.04 14.74 L 9.07 10.33 L 9.26 2.04 L 13.67 9.07 L 21.96 9.26 L 14.93 13.67 L 14.74 21.96 L 10.33 14.93 Z" />
      {children}
    </svg>
  );
});

export default SaturSlit;
