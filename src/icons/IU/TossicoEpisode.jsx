import React from 'react';

export const iconData = {
  "id": "TossicoEpisode",
  "name": "TossicoEpisode",
  "category": "IU",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.62 6.18 C 8.10 16.68, 17.58 9.34, 17.10 17.56"
      }
    ],
    [
      "path",
      {
        "d": "M 4.49 2.89 C 5.68 17.66, 11.26 13.48, 14.36 18.65"
      }
    ],
    [
      "path",
      {
        "d": "M 5.09 6.01 C 7.94 5.33, 9.97 11.42, 19.83 15.64"
      }
    ]
  ]
};

export const TossicoEpisode = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.62 6.18 C 8.10 16.68, 17.58 9.34, 17.10 17.56" />
      <path d="M 4.49 2.89 C 5.68 17.66, 11.26 13.48, 14.36 18.65" />
      <path d="M 5.09 6.01 C 7.94 5.33, 9.97 11.42, 19.83 15.64" />
      {children}
    </svg>
  );
});

export default TossicoEpisode;
