import React, { Component } from 'react';
import { View, Text, DeviceEventEmitter, NativeModules, Image, TextInput, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection, Button } from './common';
import { selectImage, inputHandler, checkSavedName, saveName } from '../actions';
import ImagePicker from 'react-native-image-picker';

var RNUploader = NativeModules.RNUploader;
let files = [];

class DetailItem extends Component {

    componentDidMount() {
        this.props.checkSavedName();
    }

    selectImage() {
        const options = {
            title: 'Select Avatar',
            customButtons: [
                { name: 'fb', title: 'Choose Photo' },
            ],
            storageOptions: {
                skipBackup: true,
                path: 'images'
            }
        };

        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            }
            else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            }
            else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            }
            else {
                // let source = { uri: response.uri };
                files = [];
                let file = {
                    name: 'image',
                    filename: response.fileName,
                    filepath: 'data:image/jpeg;base64,' + response.data,
                };
                files.push(file);

                // You can also display the image using data:
                let source = { uri: 'data:image/jpeg;base64,' + response.data };
                this.props.selectImage(source.uri);
                console.log(source);
            }
        });

    }

    uploadImage() {
        let opts = {
            url: 'http://172.18.1.50:9104/api/upload/profile',
            files: files,
            method: 'POST',
            headers: { 'Accept': 'application/json', 'api_key': 'test' }
        }
        RNUploader.upload(opts, (err, response) => {
            if (err) {
                console.log(err);
                return;
            }

            let status = response.status;
            let responseString = response.data;
            let json = JSON.parse(responseString);
            console.log(json);

            console.log('upload complete with status ' + status);
        });
    }

    renderImage() {
        if (this.props.uri.success) {
            return (
                <CardSection>
                    <Image
                        style={styles.imageStyle}
                        source={{ uri: this.props.uri.uri }}
                    />
                </CardSection>
            );
        }
    }

    nameInput(text) {
        this.props.inputHandler(text);
    }

    saveName() {
        console.log('saving ', this.props.input);
        this.props.saveName(this.props.input);
    }

    render() {
        const { selectedLibraryId } = this.props;
        return (
            <View style={styles.viewStyle}>
                <ScrollView>
                    <Card>
                        <CardSection>
                            <Text>{selectedLibraryId.description}</Text>
                        </CardSection>
                        <CardSection>
                            <Button
                                onPress={this.selectImage.bind(this)}
                            >Select Image</Button>
                            <Button
                                onPress={this.uploadImage.bind(this)}
                            >Upload Image</Button>
                        </CardSection>
                        {this.renderImage()}
                        <CardSection>
                            <TextInput style={{ flex: 2 }}
                                placeholder={'Name'}
                                autoCorrect={false}
                                value={this.props.input}
                                onChangeText={this.nameInput.bind(this)}
                            />
                            <Button style={{ flex: 1 }}
                                onPress={this.saveName.bind(this)}
                            >Save Name</Button>
                        </CardSection>
                    </Card>
                </ScrollView>
            </View>
        );
    }
}

const styles = {
    viewStyle: {
        paddingTop: 65,
        flex: 1
    },
    cardParentStyle: {
        flexDirection: 'column',
        flex: 1
    },
    imageStyle: {
        flex: 1,
        width: null,
        height: 300
    }
}

const mapStateToProps = (state) => {
    const { selectedLibraryId, uri, input } = state;
    return { selectedLibraryId, uri, input };
}

export default connect(mapStateToProps, {
    selectImage, inputHandler, checkSavedName, saveName
})(DetailItem);