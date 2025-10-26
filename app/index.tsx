import { Link } from "expo-router";
import { getApps } from "firebase/app";
import { useEffect } from "react";
import { Pressable, Text, View } from "react-native";
import "../global.css";

export default function Index() {
  useEffect(() => {
    const apps = getApps();
    // console.log("Firebase apps initialized:", apps.length);
    // console.log("Auth instance:", auth);
  }, []);
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-xl font-bold text-blue-500">
        Welcome to Nativewind!
      </Text>
      <Link href="/login" asChild>
        <Pressable className="mt-4 bg-blue-500 px-4 py-2 rounded">
          <Text className="text-white text-base">Go to Login</Text>
        </Pressable>
      </Link>
    </View>
  );
}
