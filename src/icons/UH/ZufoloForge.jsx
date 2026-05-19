import React from 'react';

export const iconData = {
  "id": "ZufoloForge",
  "name": "ZufoloForge",
  "category": "UH",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.25 17.34 L 2.74 10.30 L 6.66 4.25 L 13.70 2.74 L 19.75 6.66 L 21.26 13.70 L 17.34 19.75 L 10.30 21.26 Z"
      }
    ]
  ]
};

export const ZufoloForge = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.25 17.34 L 2.74 10.30 L 6.66 4.25 L 13.70 2.74 L 19.75 6.66 L 21.26 13.70 L 17.34 19.75 L 10.30 21.26 Z" />
      {children}
    </svg>
  );
});

export default ZufoloForge;
