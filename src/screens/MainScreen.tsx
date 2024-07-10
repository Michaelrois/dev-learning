import {Amplify} from "aws-amplify";
import awsConfig from "../amplifyconfiguration.json";
import SignOutComponent from "../components/SignOutComponent";

Amplify.configure(awsConfig);

export default function MainScreen() {

    return (
        <div>
            Mainscreen
            <SignOutComponent/>
        </div>
    );
}