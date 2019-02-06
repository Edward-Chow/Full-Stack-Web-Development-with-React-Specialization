import React, {Component} from 'react';
import { Card, Button, Icon } from 'react-native-elements';
import { Text } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { MailComposer } from 'expo';

class Contact extends Component {
    constructor(props) {
        super(props);
    }

    static navigationOptions = {
        title: 'Contact Us'
	};
	
	sendMail() {
		MailComposer.composeAsync({
			recipients: ['confusion@food.net'],
			subject: 'Enquiry',
			body: 'To whom it may concern'
		})
	}

    render() {
        return (
			<Animatable.View animation="fadeInDown" duration={2000} delay={1000}>
            	<Card title="Contact Information">
            	    <Text style = {{margin: 10}}>
	        	        121, Clear Water Bay Road
	        	    </Text>
	        	    <Text style = {{margin: 10}}>
	        	        Clear Water Bay, Kowloon
	        	    </Text>
	        	    <Text style = {{margin: 10}}>
	        	        HONG KONG
	        	    </Text>
	        	    <Text style = {{margin: 10}}>
	        	        Tel: +852 1234 5678
	        	    </Text>
	        	    <Text style = {{margin: 10}}>
	        	        Fax: +852 8765 4321
	        	    </Text>
	        	    <Text style = {{margin: 10}}>
	        	        Email:confusion@food.net
	        	    </Text>
					<Button title='Send Email' 
						buttonStyle={{backgroundColor:'#512da8'}}
						icon={<Icon name='envelope-o' type='font-awesome' color='white' />}
						onPress={this.sendMail}>

					</Button>
            	</Card>
			</Animatable.View>
        );
    }
}

export default Contact;