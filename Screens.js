import React from "react";
import { Easing, Animated, Dimensions } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// import { Block } from "galio-framework";

// screens
import Dashboard from "../screens/Dashboard";
import Login from "../screens/Login";
import Pro from "../screens/Pro";
import Profile from "../screens/Profile";
import Account from "../screens/Account";
import DetailAccount from "../screens/detail_account/DetailAccount";
import Register from "../screens/Register";
import Elements from "../screens/Elements";
import Articles from "../screens/Articles";
// drawer
import CustomDrawerContent from "./Menu";

// header for screens
import { Icon, Header, Select } from "../components";
import { argonTheme, tabs } from "../constants";

const { width } = Dimensions.get("screen");

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
// const Tab = createBottomTabNavigator();

function ElementsStack(props) {
  	return (
		<Stack.Navigator mode="card" headerMode="screen">
			<Stack.Screen
				name="Elements"
				component={Elements}
				options={{
					header: ({ navigation, scene }) => (
						<Header title="Elements" navigation={navigation} scene={scene} />
					),

					cardStyle: { backgroundColor: "#F8F9FE" }
				}}
			/>

			<Stack.Screen
				name="Pro"
				component={Pro}
				options={{
					header: ({ navigation, scene }) => (
						<Header
						title=""
						back
						white
						transparent
						navigation={navigation}
						scene={scene}
						/>
					),
					headerTransparent: true
				}}
			/>
			
		</Stack.Navigator>
  	);
}

function ArticlesStack(props) {
  	return (
		<Stack.Navigator mode="card" headerMode="screen">
			<Stack.Screen
				name="Articles"
				component={Articles}
				options={{
					header: ({ navigation, scene }) => (
						<Header title="Articles" navigation={navigation} scene={scene} />
					),

					cardStyle: { backgroundColor: "#F8F9FE" }
				}}
			/>

			<Stack.Screen
				name="Pro"
				component={Pro}
				options={{
					header: ({ navigation, scene }) => (
						<Header
						title=""
						back
						white
						transparent
						navigation={navigation}
						scene={scene}
						/>
					),
					headerTransparent: true
				}}
	  		/>
		</Stack.Navigator>
	);
}

function ProfileStack(props) {
  	return (
		<Stack.Navigator initialRouteName="Profile" mode="card" headerMode="screen">
			<Stack.Screen
				name="Profile"
				component={Profile}
				options={{
					header: ({ navigation, scene }) => (
						<Header
							transparent
							white
							title="Profile"
							navigation={navigation}
							scene={scene}
						/>
					),
					cardStyle: { backgroundColor: "#FFFFFF" },
					headerTransparent: true
				}}
			/>
		</Stack.Navigator>
	);
}

function AccountStack(props) {
	return (
	  	<Stack.Navigator initialRouteName="Account" mode="card" headerMode="screen">
			<Stack.Screen
				name="Account"
				component={Account}
				options={{
					header: ({ navigation, scene }) => (
						<Header
							title="Account"
							navigation={navigation}
							scene={scene}
						/>
					),
					cardStyle: { backgroundColor: "#FFFFFF" },
				}}
			/>
			<Stack.Screen name="Detail_Account" component={DetailAccountStack} />
	  	</Stack.Navigator>
  	);
}

function DetailAccountStack(props) {
	return (
	  <Stack.Navigator initialRouteName="Detail_Account" mode="card" headerMode="screen">
		  <Stack.Screen
			  name="Detail Account"
			  component={DetailAccount}
			  options={{
					header: ({ navigation, scene }) => (
						<Header
							transparent
							white
							title="Profile"
							navigation={navigation}
							scene={scene}
						/>
					),
					cardStyle: { backgroundColor: "#FFFFFF" },
					headerTransparent: true
				}}
		  />
	  </Stack.Navigator>
  );
}


function DashboardStack(props) {
 	return (
		<Stack.Navigator mode="card" headerMode="screen">
			<Stack.Screen
				name="Dashboard"
				component={Dashboard}
				options={{
					header: ({ navigation, scene }) => (
						<Header
							title="Dashboard"
							// search
							// options
							navigation={navigation}
							scene={scene}
						/>
					),
					cardStyle: { backgroundColor: "#F8F9FE" }
				}}
			/>

	  		<Stack.Screen
				name="Pro"
				component={Pro}
				options={{
					header: ({ navigation, scene }) => (
						<Header
							title=""
							back
							white
							transparent
							navigation={navigation}
							scene={scene}
						/>
					),
					headerTransparent: true
				}}
			/>
		</Stack.Navigator>
	);
}

function LogoutStack(props){
	
}

export default function LoginStack(props) {
  	return (
		<Stack.Navigator mode="card" headerMode="none">
			<Stack.Screen
					name="Login"
					component={Login}
					option={{
					headerTransparent: true
				}}
			/>
			<Stack.Screen name="App" component={AppStack} />
		</Stack.Navigator>
  	);
}

function AppStack(props) {
  	return (
		<Drawer.Navigator
			style={{ flex: 1 }}
			drawerContent={props => <CustomDrawerContent {...props} />}
			drawerStyle={{
				// backgroundColor: "#FFB236",
				backgroundColor: argonTheme.COLORS.DEFAULT,
				width: width * 0.8
			}}
	  		drawerContentOptions={{
				activeTintcolor: argonTheme.COLORS.WHITE,
				inactiveTintColor: argonTheme.COLORS.WHITE,
				activeBackgroundColor: "transparent",
				itemStyle: {
					width: width * 0.75,
					backgroundColor: "transparent",
					paddingVertical: 16,
					paddingHorizonal: 12,
					justifyContent: "center",
					alignContent: "center",
					alignItems: "center",
					overflow: "hidden"
				},
				labelStyle: {
					fontSize: 18,
					marginLeft: 12,
					fontWeight: "normal"
				}
	  		}}
	  		initialRouteName="Dashboard"
		>
			<Drawer.Screen name="Dashboard" component={DashboardStack} />
			<Drawer.Screen name="Profile" component={ProfileStack} />
			<Drawer.Screen name="Account" component={AccountStack} />
			<Drawer.Screen name="Detail Account" component={DetailAccountStack}/>
			<Drawer.Screen name="Elements" component={ElementsStack} />
			<Drawer.Screen name="Articles" component={ArticlesStack} />
			<Drawer.Screen name="Logout" component={LogoutStack} />
		</Drawer.Navigator>
  	);
}

