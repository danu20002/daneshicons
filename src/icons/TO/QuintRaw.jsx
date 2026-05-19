import React from 'react';

export const iconData = {
  "id": "QuintRaw",
  "name": "QuintRaw",
  "category": "TO",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.47 20.80 L 3.55 15.51 L 3.99 7.58 L 10.46 2.98 L 18.09 5.17 L 21.14 12.51 L 17.30 19.46 Z"
      }
    ]
  ]
};

export const QuintRaw = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.47 20.80 L 3.55 15.51 L 3.99 7.58 L 10.46 2.98 L 18.09 5.17 L 21.14 12.51 L 17.30 19.46 Z" />
      {children}
    </svg>
  );
});

export default QuintRaw;
