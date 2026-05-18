import React from 'react';

export const iconData = {
  id: "UserRoundSearch",
  name: "UserRoundSearch",
  category: "U",
  nodes: [["circle",{"cx":"10","cy":"8","r":"5"}],["path",{"d":"M2 21a8 8 0 0 1 10.434-7.62"}],["circle",{"cx":"18","cy":"18","r":"3"}],["path",{"d":"m22 22-1.9-1.9"}]]
};

export const UserRoundSearch = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <circle cx="10" cy="8" r="5" />
      <path d="M2 21a8 8 0 0 1 10.434-7.62" />
      <circle cx="18" cy="18" r="3" />
      <path d="m22 22-1.9-1.9" />
      {children}
    </svg>
  );
});

export default UserRoundSearch;
