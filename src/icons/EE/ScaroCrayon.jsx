import React from 'react';

export const iconData = {
  "id": "ScaroCrayon",
  "name": "ScaroCrayon",
  "category": "EE",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.49 18.47 L 5.53 5.49 L 18.51 5.53 L 18.47 18.51 Z"
      }
    ]
  ]
};

export const ScaroCrayon = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.49 18.47 L 5.53 5.49 L 18.51 5.53 L 18.47 18.51 Z" />
      {children}
    </svg>
  );
});

export default ScaroCrayon;
