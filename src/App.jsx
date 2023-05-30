import Mesenger from "./Component/Mesenger";
import { GoogleOAuthProvider } from '@react-oauth/google';

const App = () => {
  const clientIds = '375656838975-64du44piup0s11gdnlqjek9eafmjkvl1.apps.googleusercontent.com'
  return (
    <GoogleOAuthProvider clientId={clientIds}>
      <Mesenger></Mesenger>
    </GoogleOAuthProvider>
  );
};

export default App;

// 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