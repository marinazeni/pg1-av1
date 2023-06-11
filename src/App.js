import logo from './logo.svg';
import './App.css';
import { Unity, useUnityContext } from "react-unity-webgl";

function App() {
  const { unityProvider } = useUnityContext({
    loaderUrl: "unity/Build/buildtemp.loader.js",
    dataUrl: "unity/Build/buildtemp.data",
    frameworkUrl: "unity/Build/buildtemp.framework.js",
    codeUrl: "unity/Build/buildtemp.wasm",
    streamingAssetsUrl: "unity/StreamingAssets"
  });

  return(
    <div>
      <h3>oioioi</h3>
      <Unity
        style={{
          width: "90%",
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