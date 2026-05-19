import React from 'react';

export const iconData = {
  "id": "NimbusStranger",
  "name": "NimbusStranger",
  "category": "BI",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.56 6.65 L 17.14 13.45 L 17.35 21.56 L 10.55 17.14 L 2.44 17.35 L 6.86 10.55 L 6.65 2.44 L 13.45 6.86 Z"
      }
    ]
  ]
};

export const NimbusStranger = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.56 6.65 L 17.14 13.45 L 17.35 21.56 L 10.55 17.14 L 2.44 17.35 L 6.86 10.55 L 6.65 2.44 L 13.45 6.86 Z" />
      {children}
    </svg>
  );
});

export default NimbusStranger;
