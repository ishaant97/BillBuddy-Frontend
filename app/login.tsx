// App.js  (temporary test)
import { makeRedirectUri } from "expo-auth-session";
import * as Google from "expo-auth-session/providers/google";
import * as WebBrowser from "expo-web-browser";
import React, { useEffect } from "react";
import { Button, Platform, Text, View } from "react-native";


WebBrowser.maybeCompleteAuthSession(); // ✅ must be called once at top level

export default function App() {
    // prefer proxy redirect, but fall back to the exact auth.expo.io url you registered in Google Console
    // const printed = makeRedirectUri({ useProxy: true } as any);
    // const PROXY_URI = "https://auth.expo.io/@ishaant_97/BillBuddy";
    // const redirectUri = printed && printed.startsWith("exp://") ? PROXY_URI : printed;
    // console.log("makeRedirectUri ->", printed, "  using redirectUri ->", redirectUri);
    // const redirectUri = PROXY_URI;

    const redirectUri = makeRedirectUri({ useProxy: true } as any);

    console.log("Using redirectUri:", redirectUri);

    const WEB_CLIENT_ID = "874504995127-7j3078qp7ug1f94theod257q37ukn3l7.apps.googleusercontent.com";
    const [request, response, promptAsync] = Google.useAuthRequest(
        {
            webClientId: WEB_CLIENT_ID,
            androidClientId: Platform.OS === "android" ? WEB_CLIENT_ID : undefined, // dev shortcut (see notes)
            scopes: ["profile", "email"],
            redirectUri,
        } as any
    );


    // Listen for changes in the authentication response
    useEffect(() => {
        if (response?.type === "success") {
            const { authentication } = response;
            console.log("Google Auth success:", authentication);
        }
    }, [response]);

    return (
        <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
            <Text style={{ marginBottom: 20, fontSize: 18 }}>
                Step 4A — Google Sign-In Test
            </Text>
            <Button
                disabled={!request}
                title="Sign in with Google"
                onPress={() => promptAsync({ useProxy: true } as any)}
            />
        </View>
    );
}
