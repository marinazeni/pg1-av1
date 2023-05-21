import logo from './logo.svg';
import './App.css';
import { Unity, useUnityContext } from "react-unity-webgl";

function App() {
  const { unityProvider } = useUnityContext({
    loaderUrl: "unity/Build/Build.loader.js",
    dataUrl: "unity/Build/Build.data",
    frameworkUrl: "unity/Build/Build.framework.js",
    codeUrl: "unity/Build/Build.wasm",
  });

  return(
    <div>
      <Unity
        style={{
          width: "80%",
          height: "fit-content",
          justifySelf: "center",
          alignSelf: "center",
        }}
        unityProvider={unityProvider}
      />
    </div>
  );
}

export default App;

/*
return(
  <div>
    <Unity
      style={{
        width: "80%",
        justifySelf: "center",
        alignSelf: "center",
      }}
      unityProvider={unityProvider}
    />
  </div>
);

*/