import React from "react";
import {
	StyleSheet,
	View,
	Alert,
} from "react-native";
import { Block, Card, theme, Input} from "galio-framework";
import {AsyncStorage, Dimensions, ScrollView, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';

// import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
// import { DataTable } from 'react-native-paper';
// import { Card } from '../components';
// import articles from '../constants/articles';


class Account extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			HeadTable: ['No', 'Nip', 'Name', 'Email', 'Actions'],
			// AccountTable: [],
			id      : [],
			nip     : [],
			name    : [],
			email   : [],
			role    : [],
			password: '',
			length  : null
		}
			AsyncStorage.getItem('api_token', (error, result) => {
				if (result) {
					try{
						fetch('http://2c6605c192b5.ngrok.io/api/otoritas-pelabuhan/user-account', {
							method: "GET",
							headers:{
								'Accept'       : 'application/json',
								'Authorization': 'Bearer '+ result
							},
						}).then(res => res.json())
						.then(resData => {
							// alert(resData.data.length)
							const getId    = []
							const getNip   = []
							const getName  = []
							const getEmail = []
							const getRole  = []

							for (let index = 0; index < resData.data.length; index++) {
								getId.push(resData.data[index].id)
								getNip.push(resData.data[index].nip)
								getName.push(resData.data[index].name)
								getEmail.push(resData.data[index].email)
								getRole.push(resData.data[index].role.name)
							}

							this.setState({
								id    : getId,
								nip   : getNip,
								name  : getName,
								email : getEmail,
								role  : getRole,
								length: resData.data.length
							})  
						});
					}catch(e){
						alert("Connection Refused, You Must Login First");
					}
				}
			});
	}
	
	listAccount = () => {
		let row = []
		const { navigation } = this.props;

		for (let index = 0; index < this.state.length; index++) {
			row.push(
				<TouchableOpacity  onPress={() => navigation.navigate('Detail_Account', {id:this.state.id[index]})}>
					<Block style={ styles.content }>
						<Card
							flex
							borderless
							key = {this.state.id[index]}
							style={styles.card}
							title= {this.state.name[index]}
							caption={this.state.nip[index]}
							location={this.state.role[index]}
							avatar="https://www.gettyimages.com/gi-resources/images/500px/983794168.jpg"
							imageStyle={styles.cardImageRadius}
							imageBlockStyle={{ padding: theme.SIZES.BASE / 2 }}
							backgroundColor = "#ffffff"
						/>
					</Block>
				</TouchableOpacity>	
			)
		}
		return row
	}

	render(){
		// const state = this.state;
		const data = [
			{ title: "First Chapter", content: "Lorem ipsum dolor sit amet", 
	
		   },
			{ title: "2nd Chapter", content: "Lorem ipsum dolor sit amet" },
			{ title: "3rd Chapter", content: "Lorem ipsum dolor sit amet" }
		  ];

		return(
			
			<ScrollView style = {{ backgroundColor : "#F8F9FE" }}>
				<Block>
					<Block>
						<Input 
							rounded
							placeholder="Search Account..." 
							style = {styles.searching}
						/>
					</Block>
					{this.listAccount()}
				</Block>			
			</ScrollView>				
		);
	}
}

const styles = StyleSheet.create({

	content : {
		marginTop : 5,
		height : 100,
		marginBottom : 10, 
		marginLeft : 20,
		marginRight : 20
	},

	searching : {
		marginTop : 10,
		height : 50,
		width : 300,
		alignSelf : 'center',
		marginBottom : 20
	}
});

export default Account;