import {signOut} from "aws-amplify/auth";

export default function SignOutComponent() {

    const handleSignOut = async () => {
        try {
            await signOut();
        } catch (error) {
            console.log('error signing out: ', error);
        }
    };

    return (
        <div>
            <button
                onClick={handleSignOut}
                className="styledButton"
            >Sign Out</button>
        </div>
    )
}