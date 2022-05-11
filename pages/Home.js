import swal from 'sweetalert';
//import {browser} from "yarn/lib/cli";
function Home() {
    function myFunction() {
        if (typeof window.ethereum == 'undefined') {
            var url = (function (agent) {
                switch (true) {
                    case agent.indexOf("chrome") > -1 && !!window.chrome:  //The user is using Chrome
                        return "https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en";
                    case agent.indexOf("firefox") > -1: //The user is using Mozilla Firefox
                        return "https://addons.mozilla.org/en-US/firefox/addon/ether-metamask/";

                    default:
                        return "You cannot connect your Metamask wallet through using this web browser";
                }
            })(window.navigator.userAgent.toLowerCase());

            swal("You do not have Metamask installed! \n Follow this link to install it:\n" + url)
        }
    }
    return (
        <div>
        <h2>JavaScript Prompt</h2>
    <button onClick={myFunction}>Try it</button>
        </div>
    )
}
export default Home