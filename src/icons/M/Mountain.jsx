import React from 'react';

export const iconData = {
  id: "Mountain",
  name: "Mountain",
  category: "M",
  nodes: [["path",{"d":"m8 3 4 8 5-5 5 15H2L8 3z"}]]
};

export const Mountain = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
      {children}
    </svg>
  );
});

export default Mountain;
