import React, { Component } from 'react';
import { Text, View, Keyboard } from 'react-native';
import { Card, CardSection, Button, Input, Spinner } from './common';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';

class LoginForm extends Component {

    onEmailChange(text) {
        this.props.emailChanged(text);
    }

    onPasswordChange(text) {
        this.props.passwordChanged(text);
    }

    onButtonPress() {
        const { email, password } = this.props;
        this.props.loginUser({ email, password });
        Keyboard.dismiss();
    }

    renderButton() {
        if (this.props.loading) {
            return <Spinner size='large' />;
        }
        return (
            <Button
                onPress={this.onButtonPress.bind(this)}>
                Log In
            </Button>
        );
    }

    static navigationOptions = {
        title: 'Welcome',
    };

    render() {
        return (
            <View style={styles.viewStyle}>
                <Card>
                    <CardSection>
                        <Input
                            label="Email"
                            placeholder="user@email.com"
                            onChangeText={this.onEmailChange.bind(this)}
                            value={this.props.email}
                        />
                    </CardSection>
                    <CardSection>
                        <Input
                            secureTextEntry
                            label="Password"
                            placeholder="password"
                            onChangeText={this.onPasswordChange.bind(this)}
                            value={this.props.password}
                        />
                    </CardSection>
                    <Text style={styles.errorTextStyles}>
                        {this.props.error}
                    </Text>
                    <CardSection>
                        {this.renderButton()}
                    </CardSection>
                </Card>
            </View>
        );
    }
}

const styles = {
    errorTextStyles: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    },
    viewStyle: {
        paddingTop: 65
    }
}

const mapStateToProps = ({ auth }) => {
    const { email, password, error, loading, success } = auth;
    return { email, password, error, loading, success };
};

export default connect(mapStateToProps, {
    emailChanged, passwordChanged, loginUser
})(LoginForm);