import React from 'react';

export const iconData = {
  "id": "ScudoFetch",
  "name": "ScudoFetch",
  "category": "BJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 22.96 11.94 L 14.37 16.06 L 6.57 21.52 L 7.30 12.03 L 6.47 2.54 L 14.33 7.91 Z"
      }
    ]
  ]
};

export const ScudoFetch = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 22.96 11.94 L 14.37 16.06 L 6.57 21.52 L 7.30 12.03 L 6.47 2.54 L 14.33 7.91 Z" />
      {children}
    </svg>
  );
});

export default ScudoFetch;
