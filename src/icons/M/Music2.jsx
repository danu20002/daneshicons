import React from 'react';

export const iconData = {
  id: "Music2",
  name: "Music2",
  category: "M",
  nodes: [["circle",{"cx":"8","cy":"18","r":"4"}],["path",{"d":"M12 18V2l7 4"}]]
};

export const Music2 = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <circle cx="8" cy="18" r="4" />
      <path d="M12 18V2l7 4" />
      {children}
    </svg>
  );
});

export default Music2;
