# bp-app-react-components


## Components List:

• RegisterForm

• RegisterFormWSignIn

• SignIn

• KeepYourAccSafe

• ReEnterCode


## Font / Typeface Info

The H1 header typeface is Libre Franklin, Google Fonts' version of Franklin Gothic.

For the native app build, please find the ttf and otf font files in the /src/LibreFranklin-font folder.



## RegisterForm and RegisterFormWSignIn:

Each input is a 'controlled component': Each input receives its value declaratively from state.

An onChange event for each input takes the e.target.value and stores it in state.

The input value prop receives it's value from the new state, and re-renders to display the new user input.
