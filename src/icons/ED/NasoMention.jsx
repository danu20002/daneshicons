import React from 'react';

export const iconData = {
  "id": "NasoMention",
  "name": "NasoMention",
  "category": "ED",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.82 19.57 L 3.47 13.45 L 5.55 6.24 L 12.48 3.36 L 19.05 6.99 L 20.31 14.39 L 15.32 19.99 Z"
      }
    ]
  ]
};

export const NasoMention = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.82 19.57 L 3.47 13.45 L 5.55 6.24 L 12.48 3.36 L 19.05 6.99 L 20.31 14.39 L 15.32 19.99 Z" />
      {children}
    </svg>
  );
});

export default NasoMention;
