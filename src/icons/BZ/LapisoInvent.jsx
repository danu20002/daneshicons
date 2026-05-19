import React from 'react';

export const iconData = {
  "id": "LapisoInvent",
  "name": "LapisoInvent",
  "category": "BZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 16.01 5.00 L 20.06 11.97 L 16.06 18.97 L 7.99 19.00 L 3.94 12.03 L 7.94 5.03 Z"
      }
    ]
  ]
};

export const LapisoInvent = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 16.01 5.00 L 20.06 11.97 L 16.06 18.97 L 7.99 19.00 L 3.94 12.03 L 7.94 5.03 Z" />
      {children}
    </svg>
  );
});

export default LapisoInvent;
