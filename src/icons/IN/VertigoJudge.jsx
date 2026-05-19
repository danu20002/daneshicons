import React from 'react';

export const iconData = {
  "id": "VertigoJudge",
  "name": "VertigoJudge",
  "category": "IN",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.36 14.62 L 4.57 6.88 L 11.37 2.99 L 18.65 5.89 L 20.92 13.39 L 16.47 19.84 L 8.66 20.39 Z"
      }
    ]
  ]
};

export const VertigoJudge = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.36 14.62 L 4.57 6.88 L 11.37 2.99 L 18.65 5.89 L 20.92 13.39 L 16.47 19.84 L 8.66 20.39 Z" />
      {children}
    </svg>
  );
});

export default VertigoJudge;
