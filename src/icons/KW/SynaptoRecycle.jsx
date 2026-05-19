import React from 'react';

export const iconData = {
  "id": "SynaptoRecycle",
  "name": "SynaptoRecycle",
  "category": "KW",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.09 15.14 L 13.88 15.85 L 8.86 21.09 L 8.15 13.88 L 2.91 8.86 L 10.12 8.15 L 15.14 2.91 L 15.85 10.12 Z"
      }
    ]
  ]
};

export const SynaptoRecycle = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.09 15.14 L 13.88 15.85 L 8.86 21.09 L 8.15 13.88 L 2.91 8.86 L 10.12 8.15 L 15.14 2.91 L 15.85 10.12 Z" />
      {children}
    </svg>
  );
});

export default SynaptoRecycle;
