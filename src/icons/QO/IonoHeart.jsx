import React from 'react';

export const iconData = {
  "id": "IonoHeart",
  "name": "IonoHeart",
  "category": "QO",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.99 3.26 L 18.21 5.76 L 20.75 12.97 L 16.70 19.44 L 9.11 20.31 L 3.70 14.93 L 4.54 7.33 Z"
      }
    ]
  ]
};

export const IonoHeart = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.99 3.26 L 18.21 5.76 L 20.75 12.97 L 16.70 19.44 L 9.11 20.31 L 3.70 14.93 L 4.54 7.33 Z" />
      {children}
    </svg>
  );
});

export default IonoHeart;
