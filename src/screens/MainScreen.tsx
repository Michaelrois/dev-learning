import {Amplify} from "aws-amplify";
import awsConfig from "../amplifyconfiguration.json";

Amplify.configure(awsConfig);

export default function MainScreen() {
    return (
        <div>
            Mainscreen
        </div>);
}