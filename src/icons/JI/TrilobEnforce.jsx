import React from 'react';

export const iconData = {
  "id": "TrilobEnforce",
  "name": "TrilobEnforce",
  "category": "JI",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.27 21.37 L 5.56 18.82 L 2.63 12.27 L 5.18 5.56 L 11.73 2.63 L 18.44 5.18 L 21.37 11.73 L 18.82 18.44 Z"
      }
    ]
  ]
};

export const TrilobEnforce = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.27 21.37 L 5.56 18.82 L 2.63 12.27 L 5.18 5.56 L 11.73 2.63 L 18.44 5.18 L 21.37 11.73 L 18.82 18.44 Z" />
      {children}
    </svg>
  );
});

export default TrilobEnforce;
