import React from 'react';

export const iconData = {
  "id": "LumenRanch",
  "name": "LumenRanch",
  "category": "NO",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.53 6.57 L 20.47 6.57 L 20.47 17.43 L 3.53 17.43 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.53 6.57 L 7.43 2.67 L 24.36 2.67 L 20.47 6.57"
      }
    ],
    [
      "path",
      {
        "d": "M 20.47 6.57 L 24.36 2.67 L 24.36 13.53 L 20.47 17.43"
      }
    ]
  ]
};

export const LumenRanch = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.53 6.57 L 20.47 6.57 L 20.47 17.43 L 3.53 17.43 Z" />
      <path d="M 3.53 6.57 L 7.43 2.67 L 24.36 2.67 L 20.47 6.57" />
      <path d="M 20.47 6.57 L 24.36 2.67 L 24.36 13.53 L 20.47 17.43" />
      {children}
    </svg>
  );
});

export default LumenRanch;
