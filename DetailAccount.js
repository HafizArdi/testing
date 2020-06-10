import React from "react";
import {
	StyleSheet,
	View,
	Alert,
} from "react-native";
import { Block, Text} from "galio-framework";

class DetailAccount extends React.Component{
    
    render(){
        const id = this.props.navigation.getParam('id', 'NO-ID')
        return(
            
            <Block>
                <Text>
                    {id}
                </Text>

            </Block>
        );
    }
}

export default DetailAccount;