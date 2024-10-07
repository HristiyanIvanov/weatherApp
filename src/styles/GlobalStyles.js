import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
  &, &.light-mode {
  /* Grey */
  --color-grey-0: #ffffff;
  --color-grey-50: #f8f9fa;
  --color-grey-100: #ececec;
  --color-grey-200: #e2e2e2;
  --color-grey-300: #cccccc;
  --color-grey-400: #b3b3b3;
  --color-grey-500: #9e9e9e;
  --color-grey-600: #7a7a7a;  
  --color-grey-700: #585858; 
  --color-grey-800: #3c3c3c; 
  --color-grey-900: #292929;

  /* Blue */
  --color-blue-700: #83cbfb;
  --color-blue-100: #04558b;
  /*
  --color-green-100: #dcfce7;
  --color-green-700: #15803d;
  --color-yellow-100: #fef9c3;
  --color-yellow-700: #a16207;
  --color-silver-100: #e5e7eb;
  --color-silver-700: #374151;
  --color-indigo-100: #e0e7ff;
  --color-indigo-700: #4338ca;

  --color-red-100: #fee2e2;
  --color-red-700: #b91c1c;
  --color-red-800: #991b1b; */

  --backdrop-color: rgba(255, 255, 255, 0.1);
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
  --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.12);
  --image-grayscale: 0;
  --image-opacity: 100%;
  }
  
  &.dark-mode {
  --color-grey-0: #151515;
  --color-grey-50: #111015;
  --color-grey-100: #1e1e1e;
  --color-grey-200: #202020;
  --color-grey-300: #292929;
  --color-grey-400: #383838;
  --color-grey-500: #6b7280;
  --color-grey-600: #9ca3af;
  --color-grey-700: #d1d5db;
  --color-grey-800: #f3f4f6;
  --color-grey-900: #ffffff;

  /* Blue */
  --color-blue-700: #04558b;
  --color-blue-100: #83cbfb;

  --backdrop-color: rgba(0, 0, 0, 0.4);
  --shadow-sm: 0 1px 2px rgba(255, 255, 255, 0.04);
  --shadow-md: 0px 0.6rem 2.4rem rgba(255, 255, 255, 0.06);
  --shadow-lg: 0 2.4rem 3.2rem rgba(255, 255, 255, 0.12);
  --image-grayscale: 100%;
  --image-opacity: 80%;

/*--color-green-100: #166534;
--color-green-700: #dcfce7;
--color-yellow-100: #854d0e;
--color-yellow-700: #fef9c3;
--color-silver-100: #374151;
--color-silver-700: #f3f4f6;
--color-indigo-100: #3730a3;
--color-indigo-700: #e0e7ff;

--color-red-100: #fee2e2;
--color-red-700: #b91c1c;
--color-red-800: #991b1b; */

  }
}

body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
  background-color: var(--color-grey-300);
  color: #fff;
}

* {
    box-sizing: border-box;
}
`;

export default GlobalStyles;
