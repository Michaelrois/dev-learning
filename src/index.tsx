import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {Amplify} from 'aws-amplify';
import awsExports from './aws-exports';
import styled from "styled-components";
import '@aws-amplify/ui-react/styles.css';
import MainScreen from './screens/MainScreen';
import {
    Authenticator,
    ThemeProvider,
    Theme,
    useTheme,
    View,
    Heading,
    Image,
    Text,
    Button,
    useAuthenticator
} from '@aws-amplify/ui-react';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

Amplify.configure(awsExports);

// Define your routes
const router = createBrowserRouter([
    {
        path: "/",
        element: <MainScreen/>,
    },

]);

//Styled Components
const AuthenticatorTitle = styled.h1`
    color: #943288;
    text-shadow: 0 3px 2px darkblue;
`;

// Define your custom components
const components = {
    Header() {
        const { tokens } = useTheme();

        return (
            <View textAlign="center" padding={tokens.space.large}>
                <Image
                    alt="Amplify logo"
                    src="https://docs.amplify.aws/assets/logo-dark.svg"
                />
                <AuthenticatorTitle>DEVELOPMENT LEARNING</AuthenticatorTitle>
            </View>
        );
    },

    Footer() {
        const { tokens } = useTheme();

        return (
            <View textAlign="center" padding={tokens.space.large}>
                <Text
                    color='#943288'
                    fontSize='12px'
                    fontWeight='bolder'
                    fontStyle="italic"
                >
                    Michael Sirois &copy; All Rights Reserved 2024
                </Text>
            </View>
        );
    },

    SignIn: {
        Header() {
            const { tokens } = useTheme();

            return (
                <Heading
                    padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
                    level={3}
                >
                    Sign in to your account
                </Heading>
            );
        },
        Footer() {
            const { toForgotPassword } = useAuthenticator();

            return (
                <View textAlign="center">
                    <Button
                        fontWeight="normal"
                        onClick={toForgotPassword}
                        size="small"
                        variation="link"
                    >
                        Reset Password
                    </Button>
                </View>
            );
        },
    },

    SignUp: {
        Header() {
            const { tokens } = useTheme();

            return (
                <Heading
                    padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
                    level={3}
                >
                    Create a new account
                </Heading>
            );
        },
        Footer() {
            const { toSignIn } = useAuthenticator();

            return (
                <View textAlign="center">
                    <Button
                        fontWeight="normal"
                        onClick={toSignIn}
                        size="small"
                        variation="link"
                    >
                        Back to Sign In
                    </Button>
                </View>
            );
        },
    },
    ConfirmSignUp: {
        Header() {
            const { tokens } = useTheme();
            return (
                <Heading
                    padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
                    level={3}
                >
                    Enter Information:
                </Heading>
            );
        },
        Footer() {
            return <Text>Footer Information</Text>;
        },
    },
    SetupTotp: {
        Header() {
            const { tokens } = useTheme();
            return (
                <Heading
                    padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
                    level={3}
                >
                    Enter Information:
                </Heading>
            );
        },
        Footer() {
            return <Text>Footer Information</Text>;
        },
    },
    ConfirmSignIn: {
        Header() {
            const { tokens } = useTheme();
            return (
                <Heading
                    padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
                    level={3}
                >
                    Enter Information:
                </Heading>
            );
        },
        Footer() {
            return <Text>Footer Information</Text>;
        },
    },
    ForgotPassword: {
        Header() {
            const { tokens } = useTheme();
            return (
                <Heading
                    padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
                    level={3}
                >
                    Enter Information:
                </Heading>
            );
        },
        Footer() {
            return <Text>Footer Information</Text>;
        },
    },
    ConfirmResetPassword: {
        Header() {
            const { tokens } = useTheme();
            return (
                <Heading
                    padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
                    level={3}
                >
                    Enter Information:
                </Heading>
            );
        },
        Footer() {
            return <Text>Footer Information</Text>;
        },
    },
};


// Define your custom form fields
const formFields = {
    signIn: {
        username: {
            placeholder: 'Enter your email',
        },
    },
    signUp: {
        password: {
            label: 'Password:',
            placeholder: 'Enter your Password:',
            isRequired: false,
            order: 2,
        },
        confirm_password: {
            label: 'Confirm Password:',
            order: 1,
        },
    },
    forceNewPassword: {
        password: {
            placeholder: 'Enter your Password:',
        },
    },
    forgotPassword: {
        username: {
            placeholder: 'Enter your email:',
        },
    },
    confirmResetPassword: {
        confirmation_code: {
            placeholder: 'Enter your Confirmation Code:',
            label: 'New Label',
            isRequired: false,
        },
        confirm_password: {
            placeholder: 'Enter your Password Please:',
        },
    },
    setupTotp: {
        QR: {
            totpIssuer: 'test issuer',
            totpUsername: 'amplify_qr_test_user',
        },
        confirmation_code: {
            label: 'New Label',
            placeholder: 'Enter your Confirmation Code:',
            isRequired: false,
        },
    },
    confirmSignIn: {
        confirmation_code: {
            label: 'New Label',
            placeholder: 'Enter your Confirmation Code:',
            isRequired: false,
        },
    },
};


// Define your theme
const theme: Theme = {
    name: 'Auth Example Theme',
    tokens: {
        components: {
            authenticator: {
                router: {
                    boxShadow: `0 0 16px black`,
                    borderWidth: '3.8px',
                    borderColor: 'darkblue',
                    borderStyle: 'double',
                },
                form: {
                    padding: `1rem 1.2rem`,
                },
            },
            button: {
                primary: {
                    backgroundColor: 'darkblue',
                    borderColor: 'black',
                    borderWidth: '0.5px',
                    color: 'white',
                    _hover: {
                        backgroundColor: '#943288',
                        color: 'white',
                    },
                },
                link: {
                    color: '#943288',
                },
            },
            fieldcontrol: {
                lineHeight: '1.5rem',
                borderColor: 'darkblue',
                _focus: {
                    boxShadow: `0 0 10px #943288`,
                },
            },
            tabs: {
                item: {
                    color: 'darkblue',
                    borderWidth: '-0.5px',
                    borderStyle: 'outset',
                    _active: {
                        borderColor: '#943288',
                        color: '#943288',
                    },
                },
            },
        },
    },
};

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <Authenticator.Provider>
            <ThemeProvider theme={theme}>
            <Authenticator
                formFields={formFields}
                components={components}
                signUpAttributes={['email']}
                className="authenticatorContainer"
            >
                {({signOut, user}) => (
                    <View>
                        <RouterProvider router={router}/>
                    </View>
                )}

            </Authenticator>
        </ThemeProvider>
        </Authenticator.Provider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
