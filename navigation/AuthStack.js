import {createStackNavigator} from "react-navigation-stack";
import RegisterClass from "../forms/auth/RegisterPage";
import WelcomePage from "../forms/auth/WelcomePage";
import RegisterClass2 from "../forms/auth/RegisterPage2";
import Login from "../forms/auth/LoginPage";
import {headerBackImag, HeaderTitle} from "./navigationConstants";
import ForgotPasswordPage from "../forms/auth/ForgotPasswordPage";

const AuthStack = createStackNavigator({
    Welcome: WelcomePage,
    RegisterPage: {
        screen: RegisterClass,
        navigationOptions: {
            headerTitle: () => HeaderTitle(`عضویت`),
            headerBackImage: () => headerBackImag,
        },
    },
    RegisterPage2: {
        screen: RegisterClass2,
        navigationOptions: {
            headerTitle: () => HeaderTitle(`عضویت`),
            headerBackImage: () => headerBackImag,
        },
    },
    Login: {
        screen: Login,
        navigationOptions: {
            headerTitle: () => HeaderTitle(`ورود`),
            headerBackImage: () => headerBackImag,
        },
    },
    ForgotPasswordPage: {
        screen: ForgotPasswordPage,
        navigationOptions: {
            headerTitle: () => HeaderTitle(`فراموشی رمز`),
            headerBackImage: () => headerBackImag,
        },
    },
    ForgotPasswordPage2: {
        screen: RegisterClass2,
        navigationOptions: {
            headerTitle: () => HeaderTitle(`فراموشی رمز`),
            headerBackImage: () => headerBackImag,
        },
    },
})

export default AuthStack;
