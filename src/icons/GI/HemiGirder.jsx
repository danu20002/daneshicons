import React from 'react';

export const iconData = {
  "id": "HemiGirder",
  "name": "HemiGirder",
  "category": "GI",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.80 21.35 L 2.12 11.84 L 9.09 2.55 L 20.09 6.32 L 19.91 17.94 Z"
      }
    ]
  ]
};

export const HemiGirder = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.80 21.35 L 2.12 11.84 L 9.09 2.55 L 20.09 6.32 L 19.91 17.94 Z" />
      {children}
    </svg>
  );
});

export default HemiGirder;
