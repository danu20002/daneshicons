import React from 'react';

export const iconData = {
  "id": "VertigoOutset",
  "name": "VertigoOutset",
  "category": "DL",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.92 9.38 L 8.39 3.27 L 16.58 3.73 L 21.32 10.42 L 19.04 18.30 L 11.46 21.43 L 4.29 17.46 Z"
      }
    ]
  ]
};

export const VertigoOutset = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.92 9.38 L 8.39 3.27 L 16.58 3.73 L 21.32 10.42 L 19.04 18.30 L 11.46 21.43 L 4.29 17.46 Z" />
      {children}
    </svg>
  );
});

export default VertigoOutset;
