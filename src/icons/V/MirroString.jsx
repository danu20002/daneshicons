import React from 'react';

export const iconData = {
  "id": "MirroString",
  "name": "MirroString",
  "category": "V",
  "nodes": [
    [
      "path",
      {
        "d": "M 18.44 19.20 L 11.46 21.64 L 4.80 18.44 L 2.36 11.46 L 5.56 4.80 L 12.54 2.36 L 19.20 5.56 L 21.64 12.54 Z"
      }
    ]
  ]
};

export const MirroString = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 18.44 19.20 L 11.46 21.64 L 4.80 18.44 L 2.36 11.46 L 5.56 4.80 L 12.54 2.36 L 19.20 5.56 L 21.64 12.54 Z" />
      {children}
    </svg>
  );
});

export default MirroString;
