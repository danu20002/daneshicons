import React from 'react';

export const iconData = {
  "id": "SolenoQuick",
  "name": "SolenoQuick",
  "category": "YP",
  "nodes": [
    [
      "path",
      {
        "d": "M 17.70 19.69 L 10.60 21.47 L 4.31 17.70 L 2.53 10.60 L 6.30 4.31 L 13.40 2.53 L 19.69 6.30 L 21.47 13.40 Z"
      }
    ]
  ]
};

export const SolenoQuick = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 17.70 19.69 L 10.60 21.47 L 4.31 17.70 L 2.53 10.60 L 6.30 4.31 L 13.40 2.53 L 19.69 6.30 L 21.47 13.40 Z" />
      {children}
    </svg>
  );
});

export default SolenoQuick;
