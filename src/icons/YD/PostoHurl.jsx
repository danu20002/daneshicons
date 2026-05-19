import React from 'react';

export const iconData = {
  "id": "PostoHurl",
  "name": "PostoHurl",
  "category": "YD",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.44 5.55 C 17.52 10.12, 12.41 8.15, 18.23 16.26"
      }
    ],
    [
      "path",
      {
        "d": "M 2.44 2.89 C 17.44 4.70, 8.72 14.56, 16.96 19.55"
      }
    ],
    [
      "path",
      {
        "d": "M 7.87 5.61 C 11.14 18.70, 12.26 13.82, 15.16 18.04"
      }
    ]
  ]
};

export const PostoHurl = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.44 5.55 C 17.52 10.12, 12.41 8.15, 18.23 16.26" />
      <path d="M 2.44 2.89 C 17.44 4.70, 8.72 14.56, 16.96 19.55" />
      <path d="M 7.87 5.61 C 11.14 18.70, 12.26 13.82, 15.16 18.04" />
      {children}
    </svg>
  );
});

export default PostoHurl;
