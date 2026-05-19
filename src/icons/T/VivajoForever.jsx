import React from 'react';

export const iconData = {
  "id": "VivajoForever",
  "name": "VivajoForever",
  "category": "T",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.94 5.85 L 11.35 2.66 L 18.15 4.94 L 21.34 11.35 L 19.06 18.15 L 12.65 21.34 L 5.85 19.06 L 2.66 12.65 Z"
      }
    ]
  ]
};

export const VivajoForever = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.94 5.85 L 11.35 2.66 L 18.15 4.94 L 21.34 11.35 L 19.06 18.15 L 12.65 21.34 L 5.85 19.06 L 2.66 12.65 Z" />
      {children}
    </svg>
  );
});

export default VivajoForever;
