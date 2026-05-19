import React from 'react';

export const iconData = {
  "id": "YttriumSubject",
  "name": "YttriumSubject",
  "category": "TZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.00 2.72 L 19.74 12.00 L 12.00 21.28 L 4.26 12.00 Z"
      }
    ]
  ]
};

export const YttriumSubject = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.00 2.72 L 19.74 12.00 L 12.00 21.28 L 4.26 12.00 Z" />
      {children}
    </svg>
  );
});

export default YttriumSubject;
