import Mesenger from "./Component/Mesenger";
import { GoogleOAuthProvider } from '@react-oauth/google';
import LoginProvider from "./contextapi/Loginprobider";


const App = () => {
 
  return (
    <GoogleOAuthProvider clientId={import.meta.env.VITE_KEY}>
            <LoginProvider>
            <Mesenger></Mesenger>
            </LoginProvider>
      
    </GoogleOAuthProvider>
  );
};

export default App;

// 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