import React from 'react';

export const iconData = {
  "id": "VerniceWhirl",
  "name": "VerniceWhirl",
  "category": "HB",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.78 10.99 L 6.91 5.48 L 13.01 3.78 L 18.52 6.91 L 20.22 13.01 L 17.09 18.52 L 10.99 20.22 L 5.48 17.09 Z"
      }
    ]
  ]
};

export const VerniceWhirl = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.78 10.99 L 6.91 5.48 L 13.01 3.78 L 18.52 6.91 L 20.22 13.01 L 17.09 18.52 L 10.99 20.22 L 5.48 17.09 Z" />
      {children}
    </svg>
  );
});

export default VerniceWhirl;
