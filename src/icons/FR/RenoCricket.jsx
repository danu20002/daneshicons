import React from 'react';

export const iconData = {
  "id": "RenoCricket",
  "name": "RenoCricket",
  "category": "FR",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.17 17.57 L 2.52 10.40 L 6.43 4.17 L 13.60 2.52 L 19.83 6.43 L 21.48 13.60 L 17.57 19.83 L 10.40 21.48 Z"
      }
    ]
  ]
};

export const RenoCricket = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.17 17.57 L 2.52 10.40 L 6.43 4.17 L 13.60 2.52 L 19.83 6.43 L 21.48 13.60 L 17.57 19.83 L 10.40 21.48 Z" />
      {children}
    </svg>
  );
});

export default RenoCricket;
