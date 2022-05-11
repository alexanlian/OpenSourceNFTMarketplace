/* pages/_app.js */
import '../styles/globals.css'
import Link from 'next/link'
import swal from "sweetalert";
import detectEthereumProvider from '@metamask/detect-provider';


function MyApp({ Component, pageProps }) {
   /* function redirectToInstall() {
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
    redirectToInstall()*/
    function aboutUS()
    {
        return(
            swal("Hello, we are a team of 3 computer engineering student that strive to learn more " +
                "every time we can, you are currently viewing our first project which consists of an NFT Marketplace where"
         )
        )
    }
    return (
        <div className = "bg-gradient-to-b from-black to-white">
            <nav className = "border-b p-6" >
                <p className = "text-5xl text-center text-white font-bold">
                    Open - Source NFT Marketplace
                </p>
                    <div className = "flex grid grid-cols-4 gap-5 content-center mt-4" >
                        <Link href = "/" >
                            <a className = "mr-4 text-blue-500 text-center border" >
                                Home
                            </a>
                        </Link>
                        <Link href = "/create-nft" >
                            <a className = "mr-6 text-blue-500 text-center border" >
                                Mint an NFT
                            </a>
                        </Link>
                        <Link href = "/my-nfts" >
                            <a className = "mr-6 text-blue-500 text-center border" >
                                Check my NFTs
                            </a>
                        </Link>
                        <Link href = "/dashboard" >
                            <a className = "mr-6 text-blue-500 text-center border" >
                                My Dashboard
                            </a>
                        </Link>
                    </div>
            </nav>
            <div>
                <Component
                    {...pageProps}>
                </Component>
            </div>
            <div className="flex grid grid-cols-2 justify-center border-red-700 ">
                <button onClick={aboutUS} >
                    About Us
                </button>
                <a className="text-center" href="mailto:alexanlian@gmail.com">Contact Us</a>

            </div>
        </div>

    )
}

export default MyApp