import React from 'react';

export const iconData = {
  "id": "SyndesmoArrow",
  "name": "SyndesmoArrow",
  "category": "JH",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.41 14.64 L 14.42 21.47 L 5.00 18.83 L 2.59 9.36 L 9.58 2.53 L 19.00 5.17 Z"
      }
    ]
  ]
};

export const SyndesmoArrow = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.41 14.64 L 14.42 21.47 L 5.00 18.83 L 2.59 9.36 L 9.58 2.53 L 19.00 5.17 Z" />
      {children}
    </svg>
  );
});

export default SyndesmoArrow;
