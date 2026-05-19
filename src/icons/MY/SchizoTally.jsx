import React from 'react';

export const iconData = {
  "id": "SchizoTally",
  "name": "SchizoTally",
  "category": "MY",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.55 12.79 L 6.54 19.88 L 7.91 3.33 Z"
      }
    ]
  ]
};

export const SchizoTally = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.55 12.79 L 6.54 19.88 L 7.91 3.33 Z" />
      {children}
    </svg>
  );
});

export default SchizoTally;
