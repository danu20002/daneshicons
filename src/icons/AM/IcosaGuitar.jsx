import React from 'react';

export const iconData = {
  "id": "IcosaGuitar",
  "name": "IcosaGuitar",
  "category": "AM",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.64 10.70 L 16.21 20.77 L 4.96 18.72 L 3.44 7.38 L 13.75 2.43 Z"
      }
    ]
  ]
};

export const IcosaGuitar = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.64 10.70 L 16.21 20.77 L 4.96 18.72 L 3.44 7.38 L 13.75 2.43 Z" />
      {children}
    </svg>
  );
});

export default IcosaGuitar;
