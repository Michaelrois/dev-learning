import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {Amplify} from 'aws-amplify';
import awsExports from './aws-exports';
import styled from 'styled-components';
import {useTranslation, Trans} from 'react-i18next';
import '@aws-amplify/ui-react/styles.css';
import {Suspense} from 'react';
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
    useAuthenticator,
} from '@aws-amplify/ui-react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import './i18n';

Amplify.configure(awsExports);
// Define your routes
const router = createBrowserRouter([
    {
        path: '/',
        element: <MainScreen/>,
    },
]);

// Styled Components
const AuthenticatorTitle = styled.h1`
    color: #943288;
    text-shadow: 0 3px 2px darkblue;
`;

// Define your custom components
const components = {
    Header() {
        const {tokens} = useTheme();
        const {t} = useTranslation();

        return (
            <View textAlign="center" padding={tokens.space.large}>
                <Image alt="Amplify logo" src="https://docs.amplify.aws/assets/logo-dark.svg"/>
                <AuthenticatorTitle>
                    {t('dev_learning')}
                </AuthenticatorTitle>
            </View>
        );
    },

    Footer() {
        const {tokens} = useTheme();
        const {t} = useTranslation();

        return (
            <View textAlign="center" padding={tokens.space.large}>
                <Text color="#943288" fontSize="12px" fontWeight="bolder" fontStyle="italic">
                    Michael Sirois &copy; {t('auth_footer')}
                </Text>
            </View>
        );
    },

    SignIn: {
        Header() {
            const {tokens} = useTheme();
            const {t} = useTranslation();

            return (
                <Heading
                    padding=""
                    level={3}
                    textAlign= "center"
                    fontSize= "1.5rem"
                    color= "#943288"
                >
                    {t('sign_in_header')}
                </Heading>
            );
        },
        Footer() {
            const {toForgotPassword} = useAuthenticator();
            const {t} = useTranslation();

            return (
                <View textAlign="center">
                    <Button
                        fontWeight="normal"
                        onClick={toForgotPassword}
                        size="small"
                        variation="link"
                    >
                        {t('reset_password')}
                    </Button>
                </View>
            );
        },
    },

    SignUp: {
        Header() {
            const {tokens} = useTheme();
            const {t} = useTranslation();

            return (
                <Heading
                    padding=""
                    level={3}
                    textAlign= "center"
                    fontSize= "1.5rem"
                    color= "#943288"
                >
                    {t('create_account')}
                </Heading>
            );
        },
        Footer() {
            const {toSignIn} = useAuthenticator();
            const {t} = useTranslation();

            return (
                <View textAlign="center">
                    <Button
                        fontWeight="normal"
                        onClick={toSignIn}
                        size="small"
                        variation="link"
                    >
                        {t('back_to_sign_in')}
                    </Button>
                </View>
            );
        },
    },
    ConfirmSignUp: {
        Header() {
            const {tokens} = useTheme();
            const {t} = useTranslation();

            return (
                <Heading
                    padding=""
                    level={3}
                    textAlign= "center"
                    fontSize= "1.5rem"
                    color= "#943288"
                >
                    {t('information')}
                </Heading>
            );
        },
        Footer() {
            const {t} = useTranslation();

            return <Text>{t('footer_information')}</Text>;
        },
    },
    SetupTotp: {
        Header() {
            const {tokens} = useTheme();
            const {t} = useTranslation();

            return (
                <Heading
                    padding=""
                    level={3}
                    textAlign= "center"
                    fontSize= "1.5rem"
                    color= "#943288"
                >
                    {t('information')}
                </Heading>
            );
        },
        Footer() {
            const {t} = useTranslation();

            return <Text>{t('footer_information')}</Text>;
        },
    },
    ConfirmSignIn: {
        Header() {
            const {tokens} = useTheme();
            const {t} = useTranslation();
            return (
                <Heading
                    padding=""
                    level={3}
                    textAlign= "center"
                    fontSize= "1.5rem"
                    color= "#943288"
                >
                    {t('information')}
                </Heading>
            );
        },
        Footer() {
            const {t} = useTranslation();

            return <Text>{t('footer_information')}</Text>;
        },
    },
    ForgotPassword: {
        Header() {
            const {tokens} = useTheme();
            const {t} = useTranslation();

            return (
                <Heading
                    padding=""
                    level={3}
                    textAlign= "center"
                    fontSize= "1.5rem"
                    color= "#943288"
                >
                    {t('information')}
                </Heading>
            );
        },
        Footer() {
            const {t} = useTranslation();

            return <Text>{t('footer_information')}</Text>;
        },
    },
    ConfirmResetPassword: {
        Header() {
            const {tokens} = useTheme();
            const {t} = useTranslation();

            return (
                <Heading
                    padding=""
                    level={3}
                    textAlign= "center"
                    fontSize= "1.5rem"
                    color= "#943288"
                >
                    {t('information')}
                </Heading>
            );
        },
        Footer() {
            const {t} = useTranslation();

            return <Text>{t('footer_information')}</Text>;
        },
    },
};


// Define your custom form fields
const useTranslatedFormFields = () => {
    const { t } = useTranslation();

    return {
        signIn: {
            username: {
                label: t('sign_in_username'),
                placeholder: t('sign_in_placeholder'),
            },
            password: {
                label: t('sign_up_password'),
                placeholder: t('sign_up_password'),
                isRequired: true,
            },
        },
        signUp: {
            email: {
                label: t('sign_in_username'),
                placeholder: t('sign_in_placeholder'),
                order: 1,
            },
            password: {
                label: t('sign_up_password'),
                placeholder: t('sign_up_password'),
                isRequired: false,
                order: 2,
            },
            confirm_password: {
                label: t('confirm_password'),
                placeholder: t('sign_up_password'),
                order: 3,
            },
        },
        forceNewPassword: {
            password: {
                label: t('sign_up_password'),
                placeholder: t('sign_up_password'),
            },
        },
        forgotPassword: {
            username: {
                label: t('sign_in_username'),
                placeholder: t('sign_in_placeholder'),
            },
        },
        confirmResetPassword: {
            confirmation_code: {
                label: t('confirmation_code'),
                placeholder: t('confirmation_code_placeholder'),
                isRequired: false,
            },
            confirm_password: {
                label: t('confirm_password'),
                placeholder: t('sign_up_password'),
            },
        },
        setupTotp: {
            QR: {
                totpIssuer: t('test_issuer'),
                totpUsername: t('totp_username'),
            },
            confirmation_code: {
                label: t('confirmation_code'),
                placeholder: t('confirmation_code_placeholder'),
                isRequired: false,
            },
        },
        confirmSignIn: {
            confirmation_code: {
                label: t('confirmation_code'),
                placeholder: t('confirmation_code_placeholder'),
                isRequired: false,
            },
        },
    };
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
                    borderStyle: 'solid',
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

const App = () => {
    const formFields = useTranslatedFormFields();

    return (
        <Suspense fallback="...is loading">
            <Authenticator.Provider>
                <ThemeProvider theme={theme}>
                    <Authenticator formFields={formFields} components={components} signUpAttributes={['email']} className="authenticatorContainer">
                        {({ signOut, user }) => (
                            <View>
                                <RouterProvider router={router} />
                            </View>
                        )}
                    </Authenticator>
                </ThemeProvider>
            </Authenticator.Provider>
        </Suspense>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
