import React from 'react';

export const iconData = {
  "id": "SphingoQuaint",
  "name": "SphingoQuaint",
  "category": "ZI",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.36 8.38 L 19.42 15.50 L 13.89 19.98 L 6.94 18.45 L 3.80 12.07 L 6.84 5.63 L 13.76 3.99 Z"
      }
    ]
  ]
};

export const SphingoQuaint = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.36 8.38 L 19.42 15.50 L 13.89 19.98 L 6.94 18.45 L 3.80 12.07 L 6.84 5.63 L 13.76 3.99 Z" />
      {children}
    </svg>
  );
});

export default SphingoQuaint;
